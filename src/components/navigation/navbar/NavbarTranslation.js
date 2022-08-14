import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { changeLanguage } from "../../../service/serviceForNavbar";

const NavbarTranslation = ({ t, i18n }) => {
  return (
    <ToggleButtonGroup
      className="me-2"
      size="sm"
      name="options"
      defaultValue={1}
    >
      <ToggleButton
        id="tbg-radio-1"
        value={1}
        onClick={() => changeLanguage("en", i18n)}
      >
        {t("Navbar.Language.EN")}
      </ToggleButton>
      <ToggleButton
        id="tbg-radio-2"
        value={2}
        variant="warning"
        onClick={() => changeLanguage("ua", i18n)}
      >
        {t("Navbar.Language.UA")}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default NavbarTranslation;
