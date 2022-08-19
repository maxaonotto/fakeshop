import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <NavBar.Brand className="fw-bold fs-3 py-1">
      <Nav.Link as={Link} to="/">
        F a k e S h o p
      </Nav.Link>
    </NavBar.Brand>
  );
};

export default NavbarLogo;
