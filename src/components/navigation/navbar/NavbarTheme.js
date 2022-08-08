import React from "react";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeDarkMode } from "../../../service/serviceForNavbar";

const NavbarTheme = ({ darkMode, setIsDarkMode }) => {
  return (
    <FontAwesomeIcon
      className="fs-4"
      style={{ color: darkMode === "light" ? "black" : "white" }}
      icon={darkMode === "light" ? faSun : faMoon}
      onClick={() => changeDarkMode(darkMode, setIsDarkMode)}
    />
  );
};

export default NavbarTheme;
