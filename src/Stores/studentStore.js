import axios from "axios";
// import { makeObservable, observable, action } from "mobx";
import { makeAutoObservable } from "mobx";

class StudentStore {
  students = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8001/students");
      this.students = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createStudent = async (newStudent, universityId) => {
    try {
      const res = await axios.post(
        `http://localhost:8001/universities/${universityId}/students`,
        newStudent
      );
      this.students.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateStudent = async (updateStudent) => {
    try {
      const formData = new FormData();
      for (const key in updateStudent) formData.append(key, updateStudent[key]);
      await axios.put(
        `http://localhost:8001/students/${updateStudent.id}`,
        formData
      );
      const student = this.students.find(
        (student) => student.id === updateStudent.id
      );

      for (const key in updateStudent) student[key] = updateStudent[key];
      student.image = URL.createObjectURL(updateStudent.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteStudent = async (studentId) => {
    await axios.delete(`http://localhost:8001/students/${studentId}`);
    this.students = this.students.filter(
      (student) => student.id !== +studentId
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const studentStore = new StudentStore();
studentStore.fetchStudents();

export default studentStore;
