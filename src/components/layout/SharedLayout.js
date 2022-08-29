import { Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";
import { ThemeContext } from "../../util/ThemeUtil";

export default function Layout() {
  const [themeMode, setThemeMode] = useTheme();

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <Navbar />
      <Announcement />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
}
