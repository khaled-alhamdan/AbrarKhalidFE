import React from "react";
import UniList from "./UniList";
import { ThemeButton, ThemeButtonDiv } from "../styles";

const UnisPage = (props) => {
  return (
    <div>
      <UniList />
      <ThemeButtonDiv>
        <ThemeButton onClick={props.toggleTheme}>
          {props.currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ThemeButtonDiv>
    </div>
  );
};

export default UnisPage;
