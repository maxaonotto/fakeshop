import React, { useContext } from "react";
import { selectUserData } from "../../redux/selectors";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Avatar from "react-avatar";
import UsersList from "./UsersList";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const Admin = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const userData = useSelector(selectUserData);

  return (
    <>
      {!userData ? (
        <Form
          className={`text-center text-uppercase fw-bold p-5 fs-1 
        bg-${makeThemeBgColor({ themeMode })}
        text-${makeThemeTextColor({ themeMode })}`}
        >
          {t("NeedLogin")}
        </Form>
      ) : (
        <Container
          fluid
          className={`px-5 
        bg-${makeThemeBgColor({ themeMode })}
        text-${makeThemeTextColor({ themeMode })}`}
        >
          <Row className=" p-3 d-flex align-items-center">
            <Col className="d-flex flex-row-reverse px-3">
              <Avatar
                src={userData.imageUrl}
                name={`${
                  userData.name?.firstname ||
                  userData.givenName ||
                  userData.firstname
                } ${
                  userData.name?.lastname ||
                  userData.familyName ||
                  userData.lastname
                }`}
                size="100"
                round={true}
                color={"grey"}
              />
            </Col>
            <Col className="px-3 ">
              {userData.name?.firstname || userData.givenName}{" "}
              {userData.lastname || userData.familyName}
            </Col>
          </Row>
          <Table
            responsive
            bordered
            hover
            variant={themeMode === "light" ? "light" : "dark"}
            size="md"
          >
            <thead>
              <tr>
                <th>{t("Modal.Name")}</th>
                <th>{t("Modal.Username")}</th>
                <th>{t("Modal.Email")}</th>
                <th>{t("Modal.Phone")}</th>
                <th style={{ width: "7%" }}>{t("Modal.Action")}</th>
              </tr>
            </thead>
            <UsersList />
          </Table>
        </Container>
      )}
    </>
  );
};

export default Admin;
