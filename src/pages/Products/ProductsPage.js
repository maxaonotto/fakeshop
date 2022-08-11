import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Products from "../../components/product/Products";
import useDarkMode from "../../hooks/useDarkMode";

const ProductsPage = () => {
  const [darkMode, setIsDarkMode] = useDarkMode();

  return (
    <div>
      <Navbar darkMode={darkMode} setIsDarkMode={setIsDarkMode} />
      <Products />
    </div>
  );
};

export default ProductsPage;
