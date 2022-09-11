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
  const isLogin = useSelector(selectLogin);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
    <>
      {isLogin ? (
        <>
          <Button
            className="me-2"
            onClick={() => handleLogOut(dispatch)}
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
            onClick={() => setModal(true)}
          >
            {t("Navbar.LogIn")}
          </Button>
        </>
      )}
      <Login show={modal} onHide={() => setModal(false)} />
    </>
  );
};

export default NavbarAuthorization;
