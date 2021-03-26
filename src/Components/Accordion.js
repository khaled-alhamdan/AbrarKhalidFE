import React, { useState } from "react";
import courseStore from "../Stores/courseStore";
import StudentProfile from "./StudentProfile";
import studentStore from "../Stores/studentStore";
import { useParams } from "react-router-dom";
import MaterialTable from "material-table";
import { observer } from "mobx-react";
import styled from "styled-components";

import {
  StudentsInfoConatinerDiv,
  StudentsInfoWrapperDiv,
  StudentsTableDiv,
  StudentsTableWrapper,
} from "../styles";
import AddStudent from "./AddStudent";

const Accordion = () => {
  const { universityId } = useParams();
  let students = [];
  let studentsList = [];
  let coursesList = [];

  if (studentStore.loading === false)
    students = studentStore.students
      .filter((student) => student.universityId === +universityId)
      .map((student) => <StudentProfile student={student} key={student.id} />);

  if (studentStore.loading === false)
    studentsList = studentStore.students.filter(
      (student) => student.universityId === +universityId
    );

  if (courseStore.loading === false)
    coursesList = courseStore.courses.filter(
      (course) => course.universityId === +universityId
    );
  console.log(coursesList);

  const [data, setData] = useState(studentsList);
  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <div
              style={{
                border: "4px solid black",
                background: "white",
                marginBottom: "5px",
              }}
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Students
              </button>
            </div>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{
                padding: "25px 10px",
              }}
            >
              {/* <div> */}
              <StudentsInfoConatinerDiv>
                <StudentsInfoWrapperDiv>{students}</StudentsInfoWrapperDiv>
                <AddStudent />
              </StudentsInfoConatinerDiv>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <div
              style={{
                border: "4px solid black",
                background: "white",
                marginBottom: "5px",
              }}
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Students List
              </button>
            </div>
          </h2>

          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <StudentsTableDiv>
              <MaterialTable
                title=" "
                data={studentsList}
                columns={[
                  { title: "Name", field: "name" },
                  { title: "Student Id", field: "id" },
                ]}
                options={{ exportButton: true }}
              />
            </StudentsTableDiv>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <div
              style={{
                border: "4px solid black",
                background: "white",
                marginBottom: "5px",
              }}
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Courses
              </button>
            </div>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <StudentsTableDiv>
              <MaterialTable
                title=" "
                data={coursesList}
                columns={[
                  { title: "Department", field: "department" },
                  { title: "Course", field: "name" },
                  { title: "Course Id", field: "id" },
                  { title: "Instructor", field: "instructor" },
                ]}
                options={{ exportButton: true }}
              />
            </StudentsTableDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionDiv = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 18px auto;
  color: white;
`;

const AccordionHeading = styled.div`
  background: blue;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const AccordionHeaderContainer = styled.div`
  width: 50vw;
  display: flex;
  max-width: 500px;
  background: red;
`;
const AccordionHeaderBodyContent = styled.p`
  letter-spacing: 2px;
  font-weight: bold;
`;

const AccordionXIcon = styled.p`
  cursor: pointer;
`;

const AccordionContent = styled.div`
  background: green;
  height: 200px;
  display: flex;
  padding: 10px;
  justify-content: start;
  overflow: hidden;
  transition: all 2s ease-in-out;
`;

export default observer(Accordion);
