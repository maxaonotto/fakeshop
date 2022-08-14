import React from "react";

export const makeThemeTextColor = ({ themeMode }) => {
  return themeMode === "light" ? "black" : "white";
};
export const makeThemeBgColor = ({ themeMode }) => {
  return themeMode === "light" ? "white" : "black";
};
export const Context = React.createContext();
