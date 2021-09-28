import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./global/GlobalStyles";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import { menuData } from "./data/global/menuData";
import { locationData } from "./data/pages/Location/LocationData";
import { aboutData } from "./data/pages/About/AboutData";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import ScrollToTop from "./helpers/ScrollToTop";


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Header data={menuData} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About data={aboutData} />
        </Route>
        <Route exact path="/locations">
          <Locations data={locationData} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/services/:id" children={<Portfolio />}></Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer data={menuData} />
    </Router>
  );
};

export default App;
