import React, { useContext } from "react";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeThemeMode } from "../../../util/utilForNavbar";
import { Context } from "../../../util/utilForTheme";

const NavbarTheme = () => {
  const { themeMode, setThemeMode } = useContext(Context);
  return (
    <FontAwesomeIcon
      className="fs-4"
      style={{ color: themeMode === "light" ? "black" : "white" }}
      icon={themeMode === "light" ? faSun : faMoon}
      onClick={() => changeThemeMode(themeMode, setThemeMode)}
    />
  );
};

export default NavbarTheme;
