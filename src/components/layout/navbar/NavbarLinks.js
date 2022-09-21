import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarLinks = () => {
  const { t } = useTranslation();

  return (
    <Nav className="mx-auto fs-5">
      <Nav.Link as={Link} to="/" className="mx-3">
        {t("Navbar.Home")}
      </Nav.Link>
      <Nav.Link as={Link} to="/products" className="mx-3">
        {t("Navbar.Products")}
      </Nav.Link>
      <Nav.Link as={Link} to="/about" className="mx-3">
        {t("Navbar.About")}
      </Nav.Link>
    </Nav>
  );
};

export default NavbarLinks;
