import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";

import NavbarLogo from "./navbar/NavbarLogo";
import NavbarCenter from "./navbar/NavbarCenter";
import NavbarLayout from "./navbar/NavbarLayout";
import NavbarTheme from "./navbar/NavbarTheme";
import NavbarTranslation from "./navbar/NavbarTranslation";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setIsDarkMode] = useDarkMode();
  const { t, i18n } = useTranslation();

  return (
    <NavBar bg={darkMode} variant={darkMode} expand="lg">
      <Container>
        <NavbarLogo />
        <NavBar.Collapse id="navbar-light-example">
          <NavbarCenter darkMode={darkMode} />
          <NavbarLayout />
          <Nav.Link as={Link} to="/cart">
            <Button className="me-3" variant="outline-info">
              {t("Navbar.Cart")}
              <Badge bg="info">9</Badge>
            </Button>
          </Nav.Link>
        </NavBar.Collapse>
        <NavbarTranslation t={t} i18n={i18n} />
        <NavbarTheme darkMode={darkMode} setIsDarkMode={setIsDarkMode} />
      </Container>
    </NavBar>
  );
};

export default Navbar;
