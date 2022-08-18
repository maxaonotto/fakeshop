import React, { useContext } from "react";
import About from "../../components/navigation/About";
import Contacts from "../../components/navigation/Contacts";
import Carousel from "../../components/navigation/Corausel";
import Products from "../../components/product/Products";
import { Context } from "../../util/ThemeUtil";

const HomePage = () => {
  const { themeMode } = useContext(Context);
  return (
    <>
      <Carousel themeMode={themeMode} />
      <Products isLimited={true} />
      <About />
      <Contacts />
    </>
  );
};

export default HomePage;
