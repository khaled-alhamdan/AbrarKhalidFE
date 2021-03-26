import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class StudentStore {
  students = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      students: observable,
      loading: observable,
      createStudent: action,
      deleteStudent: action,
      fetchStudents: action,
      updateStudent: action,
    });
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
      await axios.put(
        `http://localhost:8001/students/${updateStudent.id}`,
        updateStudent
      );
      const student = this.students.find(
        (student) => student.id === updateStudent.id
      );
      for (const key in student) student[key] = updateStudent[key];
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
