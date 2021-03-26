import React from "react";
import {
  HeaderDiv,
  HeaderTitleDiv,
  AllinOne,
  HeaderNavbarDiv,
} from "../styles";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export const HeaderNavbar = () => {
  return (
    <div>
      <HeaderDiv>
        <HeaderTitleDiv>
          <Link to="/home">
            <AllinOne style={{ fontSize: "20px" }}>Universities App</AllinOne>
          </Link>
        </HeaderTitleDiv>
        <HeaderNavbarDiv>
          <Burger />
        </HeaderNavbarDiv>
      </HeaderDiv>
    </div>
  );
};

export default HeaderNavbar;
