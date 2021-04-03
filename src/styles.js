import styled, { createGlobalStyle } from "styled-components";
import camvid from "./Images/camvid.gif";
import ImageCoomingSoon from "./Images/ImageComingSoon.jpg";

import { Link } from "react-router-dom";
// X icon
import { MdClose } from "react-icons/md";
// + icon
import { BsPlusCircle } from "react-icons/bs";
// home
// import { BiHome } from "react-icons/bi";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const FirstPageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 70%;
  background-size: cover;
  background-position: center;
  background-image: url(${camvid});
`;

export const FirstPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  height: 100px;
  width: 300px;
  color: white;

  :hover {
    background: white;
    color: black;
    border: 4px solid black;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const HeaderDiv = styled.div`
  width: 100vw;
  height: 75px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative; // Removed the extra
  padding: 10px;
  z-index: 900;
`;

export const HeaderTitleDiv = styled.div`
  text-align: center;
  font-family: monospace;
  width: 100px;
  min-width: 250px;
  height: auto;
  color: white;
  /* display: block; */
  padding: 6px 0px;
  letter-spacing: 1px;
  border: 2px solid white;
  border-radius: 5px;
  font-weight: bold;
  background: none;
`;

export const AllinOne = styled.button`
  font-size: 13px;
  font-family: monospace;
  background: none;
  border: none;
  outline: none;
  color: white;
  width: 100%;
`;

export const HeaderNavbarDiv = styled.div`
  display: flex;
`;

export const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 10px;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? `translateX(100%)` : `translateX(0)`)};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

export const NavbarButtons = styled.li`
  text-decoration: none;
  width: 90px;
  height: 25px;
  text-align: center;
  background: white;
  color: black;
  border: none;
  border-radius: 3px;
  margin: 2px;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background: none;
    transition: 0.4s;
    color: white;
  }
`;

export const NavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* transition: 0.3s; */

  @media (max-width: 760px) {
    flex-flow: column nowrap;
    transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(100%)`)};
    position: absolute;
    min-height: 100vh;
    width: 175px;
    top: 59px;
    right: 0;
    background: black;

    li {
      align-items: center;
      margin-top: 30px;
      color: white;
      background: none;
      font-weight: bold;
      position: relative;
      /* :hover {
        color: #b0b0b0;
        background: none;
        transition: 0.5s;
      } */
      :before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }
      :hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 250px;
  outline: none;
  border: none;
`;

export const NameTagDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 200px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
export const PriceAndNameTag = styled.label`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  font-family: monospace;
`;

export const MoreInfoButton = styled.button`
  text-align: center;
  /* text-transform: uppercase; */
  font-family: sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.moreInfoText};
  background-color: ${(props) => props.theme.buttonBGColor};
  border: 2px solid ${(props) => props.theme.moreInfoBorder};
  outline: none;
  padding: 3px;
  width: 165px;
  border-radius: 6px;
  margin: 2px;
  :hover {
    cursor: pointer;
    background-color: grey;
    color: Black;
    transition: 0.8s;
    border: 2px solid white;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  font-family: sans-serif;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 7px;
  background-color: ${(props) => props.theme.buttonBGColor};
  color: ${(props) => props.theme.buttonTextColor};
  transition-duration: 0.4s;
  outline: 0;
  border: none;
  :hover {
    background-color: grey;
    color: Black;
    transition: 1s;
    border: 1px solid white;
  }
`;

export const ThemeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImagesAdjustments = styled.img`
  height: 225px;
  width: 200px;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  margin-bottom: 15px;
  margin-top: 15px;
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
`;

export const UniversityInfoConatinerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  /* border: 5px solid black; */
  width: 80%;
  text-align: center;
  margin-top: 10px;
`;

export const UniversityInfoWrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 30px;
`;

export const ProductDetailImagesAdjustments = styled.img`
  height: 275px;
  width: 250px;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  margin-bottom: 15px;
  margin-top: 15px;
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
`;

export const BackDetailButton = styled.button`
  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.buttonBGColor};
  text-transform: uppercase;
  font-family: sans-serif;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    background-color: grey;
    color: Black;
    transition: 0.6s;
    border: 1px solid white;
  }
`;

export const CreateButtonStyled = styled.button`
  color: white;
  background-color: black;
  opacity: 70%;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const ModalInput = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 5px;
  color: black;
`;

export const ModalInputDiv = styled.div`
  padding: 6px;
`;

export const ModalLabels = styled.label`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const ClosingModalX = styled(MdClose)`
  cursor: pointer;
  width: 30px;
  height: 50px;
  color: black;
  position: absolute;
  right: 10px;
  top: 5px;
  padding: none;
`;
export const AddNewProductButton = styled.p`
  margin: 4px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export const IconPlusCircle = styled(BsPlusCircle)`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const PlusAndAddDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 25px;
`;

export const UpdateButtonStyled = styled.button`
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  background-color: ${(props) => props.theme.updateButton};
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  border: 2px solid white;
  outline: none;
  padding: 3px;
  width: 80px;
  border-radius: 6px;
  margin: 2px;
  opacity: 50%;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.deleteButton};
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  border: 2px solid white;
  outline: none;
  padding: 3px;
  width: 80px;
  border-radius: 6px;
  margin: 2px;
  opacity: 50%;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const AccordionButton = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;

  :hover {
    background-color: red;
  }
`;
export const AccordionContent = styled.div`
  padding: 0 18px;
  background-color: white;
  /* display: none; */
  overflow: hidden;
`;

export const CoursesWrapper = styled.div`
  width: 100vw;
  min-height: 200px;
  /* background-color: red; */
`;

export const StudentImagesAdjustments = styled.img`
  height: 125px;
  width: 125px;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  /* margin-bottom: 15px; */
  margin-top: 15px;
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
  border-radius: 80px;
`;

export const StudentsInfoConatinerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  /* border: 5px solid black; */
  width: 95vw;
  text-align: center;
  /* background-color: green; */
`;

export const StudentsInfoWrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  /* gap: 10px; */
`;

export const StudentNameTag = styled.label`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.fontColor};
  font-family: monospace;
`;

export const StudentsTableDiv = styled.div`
  max-width: 90vw;
  /* background-color: red; */
  padding: 25px 10px;
  margin-right: auto;
  margin-left: auto;
  height: 500px;
  overflow: scroll;
`;
