import React from "react";
import Login from "../../modal/Login";
import Register from "../../modal/Register";
import useAuthModal from "../../../hooks/useAuthModal";
import { Button } from "react-bootstrap";
import { t } from "i18next";

const NavbarAuthorization = () => {
  const [modal, setModal] = useAuthModal();
  return (
    <div>
      <Button
        className="me-2"
        variant="outline-dark"
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
        variant="dark"
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
