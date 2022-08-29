import React, { useContext } from "react";
import { t } from "i18next";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../util/ThemeUtil";

const NavbarCenter = () => {
  const { themeMode } = useContext(ThemeContext);

  const setFilter = (cat) => {
    // const updatedList = data.filter((x) => x.category === cat);
    // setFilter(updatedList);
  };

  return (
    <Nav className="mx-auto fs-5">
      <Nav.Link as={Link} to="/">
        {t("Navbar.Home")}
      </Nav.Link>
      <NavDropdown
        className="me-0"
        title={t("Navbar.Category.Categories")}
        id="nav-dropdown-light-example"
        menuVariant={themeMode}
      >
        <NavDropdown.Item id="women" onClick={() => setFilter("women")}>
          {t("Navbar.Category.WomensClothing")}
        </NavDropdown.Item>
        <NavDropdown.Item id="men" onClick={() => setFilter("men")}>
          {t("Navbar.Category.MensClothing")}
        </NavDropdown.Item>
        <NavDropdown.Item id="jewelery" onClick={() => setFilter("jewelery")}>
          {t("Navbar.Category.Jewelery")}
        </NavDropdown.Item>
        <NavDropdown.Item
          id="electronics"
          onClick={() => setFilter("electronics")}
        >
          {t("Navbar.Category.Electronics")}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/products">
          {t("Navbar.Category.Allproducts")}
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#about">{t("Navbar.About")}</Nav.Link>
      <Nav.Link href="#contact">{t("Navbar.Contact")}</Nav.Link>
    </Nav>
  );
};

export default NavbarCenter;
