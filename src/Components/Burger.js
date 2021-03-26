import React, { useState } from "react";
import { StyledBurger, NavbarButtons, NavBarUL, StyledLink } from "../styles";

const NavbarButtonsList = ["home", "universities"];

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
            <StyledLink to={`/${props}`}>
              <NavbarButtons>{props}</NavbarButtons>
            </StyledLink>
          ))}
        </NavBarUL>
      </div>
    </>
  );
};

export default Burger;
