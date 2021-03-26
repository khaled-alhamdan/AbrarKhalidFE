import React, { useState } from "react";
import { UpdateButtonStyled } from "../styles";
import UniModal from "../Modals/UniModal";

const UpdateButton = ({ oldUniversity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onClick={modalStatus}> Update </UpdateButtonStyled>
      <UniModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
        oldUniversity={oldUniversity}
      />
    </>
  );
};

export default UpdateButton;
