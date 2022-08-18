import { Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";
import { Context } from "../../util/ThemeUtil";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const [themeMode, setThemeMode] = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <Context.Provider value={{ themeMode, setThemeMode, t, i18n }}>
      <Navbar />
      <Announcement />
      <Outlet />
      <Footer />
    </Context.Provider>
  );
}
