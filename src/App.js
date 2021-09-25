import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./global/GlobalStyles";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import CtaSection from "./components/global/Cta/CtaSection";
import { menuData } from "./data/global/menuData";
import { ctaData } from "./data/global/CtaData";
import { portfolioData } from "./data/pages/Portfolio/portfolioData";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header data={menuData} />
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
        <Route path="/services/:id" children={<Portfolio />}></Route>
      </Switch>
      <CtaSection data={ctaData} />
      <Footer data={menuData} />
    </Router>
  );
};

export default App;
