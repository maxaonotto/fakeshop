import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";

import NavbarLogo from "./NavbarLogo";
import NavbarCenter from "./NavbarCenter";
import NavbarAuthorization from "./NavbarAuthorization";
import NavbarTheme from "./NavbarTheme";
import NavbarTranslation from "./NavbarTranslation";
import { ThemeContext } from "../../../util/ThemeUtil";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { cartAmount } = useSelector((state) => state.cart);
  return (
    <NavBar bg={themeMode} variant={themeMode} expand="lg">
      <Container>
        <NavbarLogo />
        <NavBar.Toggle aria-controls="navbar-light-example" />
        <NavBar.Collapse id="navbar-light-example">
          <NavbarCenter themeMode={themeMode} />
          <NavbarAuthorization />
          <Nav.Link as={Link} to="/cart">
            <Button
              className="me-3"
              variant={`outline-${themeMode === "light" ? "dark" : "light"}`}
            >
              {t("Navbar.Cart")}
              <Badge bg={themeMode === "light" ? "dark" : "light"}>
                {cartAmount}
              </Badge>
            </Button>
          </Nav.Link>
          <NavbarTranslation />
          <NavbarTheme />
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navbar;
