import React, { useState } from "react";
import { StyledBurger, NavbarButtons, NavBarUL, StyledLink } from "../styles";
// home icon
// import { BiHome } from "react-icons/bi";

const NavbarButtonsList = ["home", "universities"];
// const Icons = [BiHome];

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div style={{ display: "flex" }} open={open}>
        <NavBarUL open={open}>
          {NavbarButtonsList.map((props) => (
            <StyledLink to={`/${props}`} key={props}>
              <NavbarButtons>{props}</NavbarButtons>
            </StyledLink>
          ))}
        </NavBarUL>
      </div>
    </>
  );
};

export default Burger;
