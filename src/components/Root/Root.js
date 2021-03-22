import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import GlobalStyles from "../../GlobalStyles/GlobalStyles";
import Navigation from "../Organism/Navigation/Navigation/Navigation";

function Root() {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
    </Router>
  );
}

export default Root;
