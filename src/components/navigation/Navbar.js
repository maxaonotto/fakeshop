import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Badge,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Login from "../modal/Login";
import Register from "../modal/Register";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [darkMode, setIsDarkMode] = useDarkMode();

  const changeDarkMode = () => {
    darkMode === "light" ? setIsDarkMode("dark") : setIsDarkMode("light");
  };

  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <NavBar bg={darkMode} variant={darkMode} expand="lg">
      <Container>
        <NavBar.Brand className="fw-bold fs-3 py-1">
          <Nav.Link as={Link} to="/">
            F a k e S h o p
          </Nav.Link>
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="navbar-light-example" />
        <NavBar.Collapse id="navbar-light-example">
          <Nav className="mx-auto fs-5">
            <Nav.Link as={Link} to="/">
              {t("Navbar.Home")}
            </Nav.Link>
            <NavDropdown
              title={t("Navbar.Category.Categories")}
              id="nav-dropdown-light-example"
              menuVariant={darkMode}
            >
              <NavDropdown.Item id="women">
                {" "}
                {t("Navbar.Category.WomensClothing")}
              </NavDropdown.Item>
              <NavDropdown.Item id="men">
                {t("Navbar.Category.MensClothing")}
              </NavDropdown.Item>
              <NavDropdown.Item id="jewelery">
                {t("Navbar.Category.Jewelery")}
              </NavDropdown.Item>
              <NavDropdown.Item id="electronics">
                {t("Navbar.Category.Electronics")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products">
                {t("Navbar.Category.Allproducts")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              {t("Navbar.About")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("Navbar.Contact")}
            </Nav.Link>
          </Nav>
          <Button
            className="me-2"
            variant="outline-warning"
            onClick={() => {
              setLoginModal(true);
            }}
          >
            {t("Navbar.LogIn")}
          </Button>
          <Login show={loginModal} onHide={() => setLoginModal(false)} />
          <Button
            className="me-2"
            variant="success"
            onClick={() => setRegisterModal(true)}
          >
            {t("Navbar.SignUp")}
          </Button>
          <Register
            show={registerModal}
            onHide={() => setRegisterModal(false)}
          />
          <Nav.Link as={Link} to="/cart">
            <Button className="me-3" variant="outline-info">
              {t("Navbar.Cart")} <Badge bg="info">9</Badge>
            </Button>
          </Nav.Link>
          <ToggleButtonGroup
            className="me-2"
            size="sm"
            name="options"
            defaultValue={1}
          >
            <ToggleButton
              id="tbg-radio-1"
              value={1}
              onClick={() => changeLanguage("en")}
            >
              {t("Navbar.Language.EN")}
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value={2}
              variant="warning"
              onClick={() => changeLanguage("ua")}
            >
              {t("Navbar.Language.UA")}
            </ToggleButton>
          </ToggleButtonGroup>
          <FontAwesomeIcon
            className="fs-4"
            style={{ color: darkMode === "light" ? "black" : "white" }}
            icon={darkMode === "light" ? faSun : faMoon}
            onClick={() => {
              changeDarkMode();
            }}
          />
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navbar;
