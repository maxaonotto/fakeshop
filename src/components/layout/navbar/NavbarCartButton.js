import React, { useContext } from "react";
import { Badge, Button, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartAmount } from "../../../redux/selectors";
import { ThemeContext } from "../../../util/ThemeUtil";

const NavbarCartButton = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const cartAmount = useSelector(selectCartAmount);

  return (
    <Nav.Link as={Link} to="/cart">
      <Button
        className="me-2"
        variant={`outline-${themeMode === "light" ? "dark" : "light"}`}
      >
        {t("Navbar.Cart")}
        <Badge bg={themeMode === "light" ? "dark" : "light"}>
          {cartAmount}
        </Badge>
      </Button>
    </Nav.Link>
  );
};

export default NavbarCartButton;
