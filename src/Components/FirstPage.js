import React from "react";
import { FirstPageDiv, FirstPageBox, StyledLink } from "../styles";

const FirstPage = () => {
  return (
    <>
      <FirstPageDiv>
        <StyledLink to="/universities">
          <FirstPageBox>
            <h1> Get started</h1>
          </FirstPageBox>
        </StyledLink>
      </FirstPageDiv>
    </>
  );
};

export default FirstPage;
