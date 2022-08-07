import React from "react";
import Footer from "../../components/navigation/Footer";
import Home from "../../components/navigation/Home";
import Navbar from "../../components/navigation/Navbar";
import Products from "../../components/product/Products";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
