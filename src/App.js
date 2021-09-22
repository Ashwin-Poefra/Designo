import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./global/GlobalStyles";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import { menuData } from "./data/global/menuData";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header menuData={menuData} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer menuData={menuData} />
    </Router>
  );
};

export default App;
