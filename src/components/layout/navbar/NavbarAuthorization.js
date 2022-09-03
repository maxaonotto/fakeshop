import React, { useContext } from "react";
import Login from "../../modal/Login";
import Register from "../../modal/Register";
import useAuthModal from "../../../hooks/useAuthModal";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../../util/ThemeUtil";
import { useTranslation } from "react-i18next";

const NavbarAuthorization = () => {
  const { themeMode } = useContext(ThemeContext);
  const [modal, setModal] = useAuthModal();
  const { t } = useTranslation();

  return (
    <div>
      <Button
        className="me-2"
        variant={`outline-${themeMode === "light" ? "dark" : "light"}`}
        onClick={() => setModal({ ...modal, isLogin: true })}
      >
        {t("Navbar.LogIn")}
      </Button>
      <Login
        show={modal.isLogin}
        onHide={() => setModal({ ...modal, isLogin: false })}
      />
      <Button
        className="me-2"
        variant={themeMode === "light" ? "dark" : "light"}
        onClick={() => setModal({ ...modal, isRegister: true })}
      >
        {t("Navbar.SignUp")}
      </Button>
      <Register
        show={modal.isRegister}
        onHide={() => setModal({ ...modal, isRegister: false })}
      />
    </div>
  );
};

export default NavbarAuthorization;
