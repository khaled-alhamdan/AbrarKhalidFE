import React, { useState } from "react";
import { UpdateButtonStyled } from "../styles";
import StudentModal from "../Modals/StudentModal";
import { observer } from "mobx-react";

const StudentUpdate = ({ oldStudent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onClick={modalStatus}> Update </UpdateButtonStyled>
      <StudentModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
        oldStudent={oldStudent}
      />
    </>
  );
};

export default observer(StudentUpdate);
