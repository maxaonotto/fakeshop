import { Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";
import { makeThemeBgColor, ThemeContext } from "../../util/ThemeUtil";
import { Container } from "react-bootstrap";

export default function Layout() {
  const [themeMode, setThemeMode] = useTheme();

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <Navbar />
      <Announcement />
      <Container
        fluid
        className={`p-0 m-0 bg-${makeThemeBgColor({ themeMode })}`}
        style={{ minHeight: "calc(100vh - 157px)" }}
      >
        <Outlet />
      </Container>
      <Footer />
    </ThemeContext.Provider>
  );
}
