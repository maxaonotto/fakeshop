import React from "react";

export const changeThemeMode = (themeMode, setThemeMode) => {
  themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
};
export const makeThemeTextColor = ({ themeMode }) => {
  return themeMode === "light" ? "black" : "white";
};
export const makeThemeBgColor = ({ themeMode }) => {
  return themeMode === "light" ? "white" : "black";
};

export const ThemeContext = React.createContext("light");
