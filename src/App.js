// Importing useState
import { useState } from "react";
// Importing Route and Switch
import { Route, Switch, Redirect } from "react-router";
// Importing Global stayle for theme
import { GlobalStyle } from "./styles";
// Import First Page
import FirstPage from "./Components/FirstPage";
// Importing Home Page
import UnisPage from "./Components/UnisPage";
// Importing Themeprovide
import { ThemeProvider } from "styled-components";
// Importing product detail component
import UniversityDetail from "./Components/UniversityDetail";
import HeaderNavbar from "./Components/HeaderNavbar";
// Theme
const theme = {
  lightTheme: {
    backgroundColor: "#a6a3a1", // main background color
    moreInfoText: "white",
    moreInfoBorder: "white",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "black",
    headerBGC: "black",
    fontColor: "black",
    buttonTextColor: "white",
    buttonBGColor: "black",
  },
  darkTheme: {
    backgroundColor: "black", // main background color
    moreInfoText: "black",
    moreInfoBorder: "grey",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "white",
    headerBGC: "black",
    fontColor: "white",
    buttonTextColor: "black",
    buttonBGColor: "white",
  },
};

// App
const App = () => {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <ThemeProvider theme={theme[currentTheme]}>
        <HeaderNavbar />
        <GlobalStyle />
        <Switch>
          <Route path="/home" exact>
            <FirstPage />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/universities/:universityId" exact>
            <UniversityDetail
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />
          </Route>
          <Route path="/universities" exact>
            <UnisPage currentTheme={currentTheme} toggleTheme={toggleTheme} />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
