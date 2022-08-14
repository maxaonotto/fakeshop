import React from "react";
import Login from "../../modal/Login";
import Register from "../../modal/Register";
import useOpenModal from "../../../hooks/useOpenModal";
import { Button } from "react-bootstrap";
import { t } from "i18next";

const NavbarLayout = () => {
  const [openModal, setOpenModal] = useOpenModal();

  return (
    <div>
      <Button
        className="me-2"
        variant="outline-warning"
        onClick={() => setOpenModal({ ...openModal, isLogin: true })}
      >
        {t("Navbar.LogIn")}
      </Button>
      <Login
        show={openModal.isLogin}
        onHide={() => setOpenModal({ ...openModal, isLogin: false })}
      />
      <Button
        className="me-2"
        variant="success"
        onClick={() => setOpenModal({ ...openModal, isRegister: true })}
      >
        {t("Navbar.SignUp")}
      </Button>
      <Register
        show={openModal.isRegister}
        onHide={() => setOpenModal({ ...openModal, isRegister: false })}
      />
    </div>
  );
};

export default NavbarLayout;
