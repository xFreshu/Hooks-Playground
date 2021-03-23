import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../../Assets/styles/GlobalStyles";
import Navigation from "../Organism/Navigation/Navigation/Navigation";
import { theme } from "../../Assets/styles/Theme";

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
      </ThemeProvider>
    </Router>
  );
}

export default Root;
