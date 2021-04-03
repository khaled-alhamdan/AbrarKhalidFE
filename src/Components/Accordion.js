import MaterialTable from "material-table";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import courseStore from "../Stores/courseStore";
import studentStore from "../Stores/studentStore";
import {
  StudentsInfoConatinerDiv,
  StudentsInfoWrapperDiv,
  StudentsTableDiv,
} from "../styles";
import AddStudent from "./AddStudent";
import StudentProfile from "./StudentProfile";

const Accordion = () => {
  const { universityId } = useParams();
  let students = [];
  let studentsList = [];
  let coursesList = [];

  const [accordion, setAccordion] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);

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

  // const [data, setData] = useState(studentsList);
  return (
    <>
      <AccordionDiv>
        <AccordionHeading>
          <AccordionHeaderContainer onClick={() => setAccordion(!accordion)}>
            <AccordionHeaderContent>Students Profiles</AccordionHeaderContent>
            <AccordionXIcon>{accordion ? "X" : "|||"}</AccordionXIcon>
          </AccordionHeaderContainer>
        </AccordionHeading>
        {accordion ? (
          <AccordionContent height="350px" padding="0px">
            <StudentsInfoConatinerDiv>
              <StudentsInfoWrapperDiv>{students}</StudentsInfoWrapperDiv>
              <AddStudent />
            </StudentsInfoConatinerDiv>
          </AccordionContent>
        ) : (
          <AccordionContent height="0px" padding="0px"></AccordionContent>
        )}
      </AccordionDiv>
      <AccordionDiv>
        <AccordionHeading>
          <AccordionHeaderContainer onClick={() => setAccordion2(!accordion2)}>
            <AccordionHeaderContent>Students List</AccordionHeaderContent>
            <AccordionXIcon>{accordion2 ? "X" : "|||"}</AccordionXIcon>
          </AccordionHeaderContainer>
        </AccordionHeading>
        {accordion2 ? (
          <AccordionContent height="500px" padding="10px">
            <StudentsTableDiv>
              <MaterialTable
                title=" "
                data={studentsList}
                columns={[
                  { title: "Name", field: "name" },
                  { title: "Student Id", field: "id" },
                  { title: "Enrolled Courses", field: "" },
                ]}
                options={{ exportButton: true }}
              />
            </StudentsTableDiv>
          </AccordionContent>
        ) : (
          <AccordionContent height="0px" padding="0px"></AccordionContent>
        )}
      </AccordionDiv>
      <AccordionDiv>
        <AccordionHeading>
          <AccordionHeaderContainer onClick={() => setAccordion3(!accordion3)}>
            <AccordionHeaderContent>Courses List</AccordionHeaderContent>
            <AccordionXIcon>{accordion3 ? "X" : "|||"}</AccordionXIcon>
          </AccordionHeaderContainer>
        </AccordionHeading>
        {accordion3 ? (
          <AccordionContent height="500px" padding="0px">
            <StudentsTableDiv>
              <MaterialTable
                title=" "
                data={coursesList}
                columns={[
                  { title: "Department", field: "department" },
                  { title: "Course", field: "name" },
                  { title: "Course Id", field: "id" },
                  { title: "Instructor", field: "instructor" },
                  { title: "Enrolled Students", field: "" },
                ]}
                options={{ exportButton: true }}
              />
            </StudentsTableDiv>
          </AccordionContent>
        ) : (
          <AccordionContent height="0px" padding="0px"></AccordionContent>
        )}
      </AccordionDiv>
    </>
  );
};

const AccordionDiv = styled.div`
  width: 100vw;
  /* background-color: white; */
  margin-top: 10px;
`;

const AccordionHeading = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  margin-right: auto;
  margin-left: auto;
  /* background: blue; */
  outline: none;
`;
const AccordionHeaderContainer = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f0eded;
  outline: none;
  cursor: pointer;
  color: black;
  border: 3px solid black;
  border-radius: 10px;
  :hover {
    background: #b0b0b0;
    transition: 0.5s;
  }
`;
const AccordionHeaderContent = styled.p`
  letter-spacing: 2px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  outline: none;
`;

// const AccordionBodyContent = styled.p`
//   letter-spacing: 2px;
//   font-weight: bold;
//   outline: none;
//   /* background-color: yellow; */
// `;

const AccordionXIcon = styled.p`
  font-weight: 300px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 20px;
  outline: none;
`;

const AccordionContent = styled.div`
  /* display: flex; */
  width: 95vw;
  max-height: ${(props) => props.height};
  justify-content: start;
  margin-right: auto;
  margin-left: auto;
  padding: ${(props) => props.padding};
  overflow: scroll;
  /* background: green; */
  transition: height 0.2s ease-in-out;
  outline: none;
`;

export default observer(Accordion);

// <div>
// <div class="accordion accordion-flush" id="accordionFlushExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingOne">
//       <div
//         style={{
//           border: "4px solid black",
//           background: "white",
//           marginBottom: "5px",
//         }}
//       >
//         <button
//           class="accordion-button collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#flush-collapseOne"
//           aria-expanded="false"
//           aria-controls="flush-collapseOne"
//         >
//           Students
//         </button>
//       </div>
//     </h2>
//     <div
//       id="flush-collapseOne"
//       class="accordion-collapse collapse"
//       aria-labelledby="flush-headingOne"
//       data-bs-parent="#accordionFlushExample"
//     >
//       <div
//         style={{
//           padding: "25px 10px",
//         }}
//       >
//         {/* <div> */}
//         <StudentsInfoConatinerDiv>
//           <StudentsInfoWrapperDiv>{students}</StudentsInfoWrapperDiv>
//           <AddStudent />
//         </StudentsInfoConatinerDiv>
//         {/* </div> */}
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingTwo">
//       <div
//         style={{
//           border: "4px solid black",
//           background: "white",
//           marginBottom: "5px",
//         }}
//       >
//         <button
//           class="accordion-button collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#flush-collapseTwo"
//           aria-expanded="false"
//           aria-controls="flush-collapseTwo"
//         >
//           Students List
//         </button>
//       </div>
//     </h2>

//     <div
//       id="flush-collapseTwo"
//       class="accordion-collapse collapse"
//       aria-labelledby="flush-headingTwo"
//       data-bs-parent="#accordionFlushExample"
//     >
//       <StudentsTableDiv>
//         <MaterialTable
//           title=" "
//           data={studentsList}
//           columns={[
//             { title: "Name", field: "name" },
//             { title: "Student Id", field: "id" },
//           ]}
//           options={{ exportButton: true }}
//         />
//       </StudentsTableDiv>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingThree">
//       <div
//         style={{
//           border: "4px solid black",
//           background: "white",
//           marginBottom: "5px",
//         }}
//       >
//         <button
//           class="accordion-button collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#flush-collapseThree"
//           aria-expanded="false"
//           aria-controls="flush-collapseThree"
//         >
//           Courses
//         </button>
//       </div>
//     </h2>
//     <div
//       id="flush-collapseThree"
//       class="accordion-collapse collapse"
//       aria-labelledby="flush-headingThree"
//       data-bs-parent="#accordionFlushExample"
//     >
//       <StudentsTableDiv>
//         <MaterialTable
//           title=" "
//           data={coursesList}
//           columns={[
//             { title: "Department", field: "department" },
//             { title: "Course", field: "name" },
//             { title: "Course Id", field: "id" },
//             { title: "Instructor", field: "instructor" },
//           ]}
//           options={{ exportButton: true }}
//         />
//       </StudentsTableDiv>
//     </div>
//   </div>
// </div>
// </div>
