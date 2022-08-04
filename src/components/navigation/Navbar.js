import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { Button, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../modal/Login";
import Register from "../modal/Register";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = localStorage.getItem("themeNavbarFakeStore");
  const [darkMode, setIsDarkMode] = useState(theme ? theme : "light");
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const changeDarkMode = () => {
    darkMode === "light" ? setIsDarkMode("dark") : setIsDarkMode("light");
  };

  useEffect(() => {
    localStorage.setItem("themeNavbarFakeStore", darkMode);
  }, [darkMode]);

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
              Home
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="nav-dropdown-light-example"
              menuVariant={darkMode}
            >
              <NavDropdown.Item id="women">Women's Clothing</NavDropdown.Item>
              <NavDropdown.Item id="men">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item id="jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item id="electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products">
                All products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button
            className="me-2"
            variant="outline-warning"
            onClick={() => {
              setLoginModal(true);
            }}
          >
            Log In
          </Button>
          <Login show={loginModal} onHide={() => setLoginModal(false)} />
          <Button
            className="me-2"
            variant="success"
            onClick={() => setRegisterModal(true)}
          >
            Sign Up
          </Button>
          <Register
            show={registerModal}
            onHide={() => setRegisterModal(false)}
          />
          <Nav.Link as={Link} to="/cart">
            <Button className="me-3" variant="outline-info">
              Cart <Badge bg="info">9</Badge>
            </Button>
          </Nav.Link>

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
