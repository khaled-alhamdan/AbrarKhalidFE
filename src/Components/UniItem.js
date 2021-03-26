import React from "react";
import { observer } from "mobx-react";
import universityStore from "../Stores/universityStore";
import UpdateButton from "./UpdateButton";

import {
  PriceAndNameTag,
  NameTagDiv,
  MoreInfoButton,
  StyledLink,
  DeleteButton,
  ImagesAdjustments,
} from "../styles";

const UniItem = (props) => {
  const university = props.university;

  const handelDelete = () => {
    universityStore.deleteUniversity(university.id);
  };
  return (
    <div>
      <StyledLink to={`/universities/${university.id}`}>
        {university.image ? (
          <ImagesAdjustments alt={university.name} src={university.image} />
        ) : (
          <ImagesAdjustments />
        )}
      </StyledLink>
      <div>
        <NameTagDiv>
          <PriceAndNameTag>
            <b> {university.name}</b>
          </PriceAndNameTag>
        </NameTagDiv>
        <UpdateButton oldUniversity={university} />
        <DeleteButton onClick={handelDelete}>Delete</DeleteButton>
        <div>
          <StyledLink to={`/universities/${university.id}`}>
            <MoreInfoButton>University Information</MoreInfoButton>
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default observer(UniItem);
