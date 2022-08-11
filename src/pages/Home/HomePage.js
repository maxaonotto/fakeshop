import React from "react";
import About from "../../components/About";
import Contacts from "../../components/Contacts";
import Announcement from "../../components/navigation/Announcement";
import Carousel from "../../components/navigation/Corausel";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Products from "../../components/product/Products";
import useDarkMode from "../../hooks/useDarkMode";

const HomePage = () => {
  const [darkMode, setIsDarkMode] = useDarkMode();

  return (
    <>
      <Navbar darkMode={darkMode} setIsDarkMode={setIsDarkMode} />
      <Announcement darkMode={darkMode} />
      <Carousel darkMode={darkMode} />
      <Products isLimited={true} />
      <About />
      <Contacts />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default HomePage;
