import React from "react";
import About from "../../components/navigation/About";
import Contacts from "../../components/navigation/Contacts";
import Carousel from "../../components/navigation/Corausel";
import Products from "../../components/product/Products";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Products isLimited />
      <About />
      <Contacts />
    </>
  );
};

export default HomePage;
