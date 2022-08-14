export const changeThemeMode = (themeMode, setThemeMode) => {
  themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
};

export const changeLanguage = (lang, i18n) => {
  i18n.changeLanguage(lang);
};
