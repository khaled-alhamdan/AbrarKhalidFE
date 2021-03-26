import React, { useState } from "react";
// Importing product modal component
import StudentModal from "../Modals/StudentModal";
import { observer } from "mobx-react";

import { AddNewProductButton, IconPlusCircle, PlusAndAddDiv } from "../styles";

const AddStudent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PlusAndAddDiv>
        <IconPlusCircle onClick={modalStatus} />
        <AddNewProductButton onClick={modalStatus}>
          Add new Student
        </AddNewProductButton>
      </PlusAndAddDiv>
      <StudentModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
      />
    </>
  );
};

export default observer(AddStudent);
