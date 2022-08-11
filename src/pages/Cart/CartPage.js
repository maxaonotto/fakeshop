import React from "react";
import Navbar from "../../components/navigation/Navbar";
import useDarkMode from "../../hooks/useDarkMode";

const CartPage = () => {
  const [darkMode, setIsDarkMode] = useDarkMode();

  return (
    <div>
      <Navbar darkMode={darkMode} setIsDarkMode={setIsDarkMode} />
      <h1>cart</h1>
    </div>
  );
};

export default CartPage;
