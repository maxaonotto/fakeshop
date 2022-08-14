export const changeDarkMode = (darkMode, setIsDarkMode) => {
  darkMode === "light" ? setIsDarkMode("dark") : setIsDarkMode("light");
};

export const changeLanguage = (lang, i18n) => {
  i18n.changeLanguage(lang);
};
