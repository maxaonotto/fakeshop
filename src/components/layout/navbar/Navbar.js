import React, { useContext } from "react";

import { ThemeContext } from "../../../util/ThemeUtil";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";

import NavbarLogo from "./NavbarLogo";
import NavbarAuthorization from "./NavbarAuthorization";
import NavbarTheme from "./NavbarTheme";
import NavbarTranslation from "./NavbarTranslation";
import NavbarCartButton from "./NavbarCartButton";
import NavbarLinks from "../navbar/NavbarLinks";

const Navbar = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <NavBar
      bg={themeMode}
      variant={themeMode}
      expand="lg"
    >
      <Container>
        <NavbarLogo />
        <NavBar.Toggle aria-controls="navbar-light-example" />
        <NavBar.Collapse id="navbar-light-example">
          <NavbarLinks />
          <NavbarTheme />
          <NavbarTranslation />
          <NavbarCartButton />
          <NavbarAuthorization />
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navbar;
