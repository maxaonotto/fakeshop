import React from "react";
import Login from "../../modal/Login";
import Register from "../../modal/Register";
import useModal from "../../../hooks/useModal";
import { Button } from "react-bootstrap";
import { t } from "i18next";

const NavbarAuthorization = () => {
  const [modal, setModal] = useModal();

  return (
    <div>
      <Button
        className="me-2"
        variant="outline-warning"
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
        variant="success"
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
