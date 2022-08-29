import React, { useContext } from "react";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, changeThemeMode } from "../../../util/ThemeUtil";
import { Button } from "react-bootstrap";

const NavbarTheme = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  return (
    <FontAwesomeIcon
      as={Button}
      className="fs-4"
      style={{
        color: themeMode === "light" ? "black" : "white",
        cursor: "pointer",
      }}
      icon={themeMode === "light" ? faSun : faMoon}
      onClick={() => changeThemeMode(themeMode, setThemeMode)}
    />
  );
};

export default NavbarTheme;
