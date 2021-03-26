import React from "react";
// Importing products store
import universityStore from "../Stores/universityStore";
import Accordion from "./Accordion";
import { observer } from "mobx-react";

import {
  ProductDetailImagesAdjustments,
  PriceAndNameTag,
  NameTagDiv,
  StyledLink,
  BackDetailButton,
  ThemeButton,
  ThemeButtonDiv,
  CoursesWrapper,
  // StudentsInfoConatinerDiv,
  // StudentsInfoWrapperDiv,
} from "../styles";

import { useParams } from "react-router-dom";

export const UniversityDetail = (props) => {
  const { universityId } = useParams();
  let university = [];

  if (universityStore.loading === false)
    university = universityStore.universities.find(
      (university) => university.id === +universityId
    );

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {university.image ? (
        <ProductDetailImagesAdjustments
          alt={university.name}
          src={university.image}
        />
      ) : (
        <ProductDetailImagesAdjustments />
      )}
      <div>
        <NameTagDiv>
          <PriceAndNameTag>
            <b> {university.name}</b>
          </PriceAndNameTag>
        </NameTagDiv>
        <div>
          <PriceAndNameTag>
            <b> {university.description}</b>
          </PriceAndNameTag>
        </div>

        <CoursesWrapper>
          <Accordion />
          {/* <StudentsInfoConatinerDiv>
            <StudentsInfoWrapperDiv>{students}</StudentsInfoWrapperDiv>
          </StudentsInfoConatinerDiv> */}
        </CoursesWrapper>

        <div style={{ marginBottom: "15px" }}>
          <StyledLink to={`/universities`}>
            <BackDetailButton>return to universities</BackDetailButton>
          </StyledLink>
        </div>
      </div>
      <ThemeButtonDiv>
        <ThemeButton onClick={props.toggleTheme}>
          {props.currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ThemeButtonDiv>
    </div>
  );
};

export default observer(UniversityDetail);
