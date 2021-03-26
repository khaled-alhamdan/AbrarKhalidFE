import React from "react";
import { observer } from "mobx-react";
import studentStore from "../Stores/studentStore";
import StudentUpdate from "./StudentUpdate";

import {
  StudentNameTag,
  NameTagDiv,
  StyledLink,
  DeleteButton,
  StudentImagesAdjustments,
} from "../styles";

const StudentProfile = (props) => {
  const student = props.student;

  const handelDelete = (event) => {
    event.preventDefault();
    studentStore.deleteStudent(student.id);
  };
  return (
    <div>
      <StyledLink to={`/students/${student.id}`}>
        {student.image ? (
          <StudentImagesAdjustments alt={student.name} src={student.image} />
        ) : (
          <StudentImagesAdjustments />
        )}
      </StyledLink>
      <div>
        <NameTagDiv>
          <StudentNameTag>
            <b> {student.name}</b>
          </StudentNameTag>
        </NameTagDiv>
        <StudentUpdate oldStudent={student} />
        <DeleteButton onClick={handelDelete}>Delete</DeleteButton>
      </div>
    </div>
  );
};

export default observer(StudentProfile);
