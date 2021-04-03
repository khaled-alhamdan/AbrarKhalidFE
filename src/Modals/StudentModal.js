import React, { useState } from "react";
// Importing products store
import studentStore from "../Stores/studentStore";
// import universityStore from "../Stores/universityStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import Modal from "react-modal";
import {
  CreateButtonStyled,
  ModalInput,
  ModalInputDiv,
  ModalLabels,
  ClosingModalX,
} from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "250px",

    // background: "black",
  },
};

const StudentModal = ({ oldStudent, modalStatus, isOpen, closeModal }) => {
  const [student, setStudent] = useState(
    oldStudent ?? {
      name: "",
      image: "",
    }
  );

  const { universityId } = useParams();

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    studentStore[oldStudent ? "updateStudent" : "createStudent"](
      student,
      universityId
    );
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <Modal
          modalStatus={modalStatus}
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={closeModal} />
            <div>
              <div>
                <ModalLabels>Name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter University Name"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="file"
                    placeholder="Enter University Image"
                    name="image"
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              {oldStudent ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default observer(StudentModal);
