import { useState, useEffect } from "react";

export default function useTheme() {
  const theme = localStorage.getItem("themeNavbarFakeStore") || "light";
  const [themeMode, setThemeMode] = useState(theme);

  useEffect(() => {
    localStorage.setItem("themeNavbarFakeStore", themeMode);
  }, [themeMode]);

  return [themeMode, setThemeMode];
}
