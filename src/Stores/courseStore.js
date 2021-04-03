import axios from "axios";
// import { makeObservable, observable, action } from "mobx";
import { makeAutoObservable } from "mobx";

class CourseStore {
  courses = [];
  loading = false;

  constructor() {
    // makeObservable(this, {
    //   courses: observable,
    //   loading: observable,
    //   createCourse: action,
    //   deleteCourse: action,
    //   fetchCourses: action,
    //   updateCourse: action,
    // });
    makeAutoObservable(this);
  }

  fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8001/courses");
      this.courses = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createCourse = async (newCourse) => {
    try {
      const res = await axios.post("http://localhost:8001/courses", newCourse);
      this.courses.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateCourse = async (updateCourse) => {
    try {
      await axios.put(
        `http://localhost:8001/courses/${updateCourse.id}`,
        updateCourse
      );
      const course = this.courses.find(
        (course) => course.id === updateCourse.id
      );
      for (const key in course) course[key] = updateCourse[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteCourse = async (courseId) => {
    await axios.delete(`http://localhost:8001/courses/${courseId}`);
    this.courses = this.courses.filter((course) => course.id !== +courseId);
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const courseStore = new CourseStore();
courseStore.fetchCourses();

export default courseStore;
