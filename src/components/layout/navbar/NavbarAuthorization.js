import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectUserData } from "../../../redux/selectors/index";
import { handleLogOut } from "../../../redux/action";

import { Button } from "react-bootstrap";
import { ThemeContext } from "../../../util/ThemeUtil";
import { useTranslation } from "react-i18next";
import Login from "../../modal/Login";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const NavbarAuthorization = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleOpen = () => setModal(true);
  const isLogin = useSelector(selectLogin);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logOut = () => handleLogOut(dispatch);

  return (
    <>
      {isLogin ? (
        <>
          <Button
            className="me-2"
            onClick={logOut}
            variant={`${themeMode === "light" ? "dark" : "light"}`}
          >
            Log Out
          </Button>
          <Link to="/admin">
            <Avatar
              src={userData.imageUrl}
              name={`${userData.name?.firstname} ${userData.name?.lastname}`}
              size="40"
              round={true}
            />
          </Link>
        </>
      ) : (
        <>
          <Button
            className="me-2"
            variant={`${themeMode === "light" ? "dark" : "light"}`}
            onClick={handleOpen}
          >
            {t("Navbar.LogIn")}
          </Button>
        </>
      )}
      <Login show={modal} onHide={handleClose} />
    </>
  );
};

export default NavbarAuthorization;
