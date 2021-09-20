import React from "react";
import { GlobalStyles } from "./global/GlobalStyles";
import Header from "./components/global/Header/Header";
import { menuData } from "./data/global/MenuData";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header menuData={menuData} />
    </>
  );
};

export default App;
