import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavBar bg="light" variant="light" expand="lg">
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
              menuVariant="light"
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
          <Button className="me-2" variant="outline-warning">
            Log In
          </Button>
          <Login />
          <Button className="me-2" variant="success">
            Sign Up
          </Button>
          <Register />
          <Nav.Link as={Link} to="/cart">
            <Button className="me-3" variant="outline-info">
              Cart <Badge bg="info">9</Badge>
            </Button>
          </Nav.Link>
          <ToggleButtonGroup
            className="me-2"
            size="sm"
            name="options"
            defaultValue={1}
          >
            <ToggleButton id="tbg-radio-1" value={1}>
              EN
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} variant="warning">
              UA
            </ToggleButton>
          </ToggleButtonGroup>
          <FontAwesomeIcon className="fs-4" icon={faSun} />
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navbar;
