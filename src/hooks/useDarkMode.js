import { useState, useEffect } from "react";

export default function useDarkMode() {
  const theme = localStorage.getItem("themeNavbarFakeStore");
  const [darkMode, setIsDarkMode] = useState(theme ? theme : "light");

  useEffect(() => {
    localStorage.setItem("themeNavbarFakeStore", darkMode);
  }, [darkMode]);

  return [darkMode, setIsDarkMode];
}
