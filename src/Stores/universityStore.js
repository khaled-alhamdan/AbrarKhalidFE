import axios from "axios";
// import { makeObservable, observable, action } from "mobx";
import { makeAutoObservable } from "mobx";
// import studentStore from "./studentStore";

class UniversityStore {
  universities = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUniversities = async () => {
    try {
      const response = await axios.get("http://localhost:8001/universities");
      this.universities = response.data;
      this.loading = false;
      console.log(this.universities);
    } catch (error) {
      console.error(error);
    }
  };

  createUniversity = async (newUniversity) => {
    try {
      const formData = new FormData();
      for (const key in newUniversity) formData.append(key, newUniversity[key]);
      const res = await axios.post(
        "http://localhost:8001/universities",
        formData
      );
      this.universities.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateUniversity = async (updateUniversity) => {
    try {
      const formData = new FormData();
      for (const key in updateUniversity)
        formData.append(key, updateUniversity[key]);
      await axios.put(
        `http://localhost:8001/universities/${updateUniversity.id}`,
        formData
      );
      const university = this.universities.find(
        (university) => university.id === updateUniversity.id
      );
      for (const key in university) university[key] = updateUniversity[key];
      university.image = URL.createObjectURL(updateUniversity.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteUniversity = async (universityId) => {
    await axios.delete(`http://localhost:8001/universities/${universityId}`);
    this.universities = this.universities.filter(
      (university) => university.id !== +universityId
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // createStudent = async ({ newStudent, universityId }) => {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:8001/universities/${universityId}/students`,
  //       newStudent
  //     );
  //     studentStore.students.push(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}

const universitiesStore = new UniversityStore();
universitiesStore.fetchUniversities();

export default universitiesStore;
