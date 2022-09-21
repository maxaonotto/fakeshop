import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUserId from "../../hooks/useUserId";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { selectLogin, selectUserData } from "../../redux/selectors";
import { editUser } from "../../redux/reducer/userReducer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Avatar from "react-avatar";
import { Button } from "react-bootstrap";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const User = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [user] = useUserId();
  const { register, handleSubmit } = useForm();
  const userData = useSelector(selectUserData);
  const isLogin = useSelector(selectLogin);
  const dispatch = useDispatch();
  const handleEditUser = (data) => {
    dispatch(editUser({ ...user, ...data }));
  };

  return (
    <>
      {!isLogin ? (
        <Form
          className={`text-center text-uppercase fw-bold p-5 fs-1 
        bg-${makeThemeBgColor({ themeMode })}
        text-${makeThemeTextColor({ themeMode })}`}
        >
          {t("NeedLogin")}
        </Form>
      ) : (
        <Card
          size="lg"
          aria-labelledby="contained-Card-title-vcenter"
          className={`px-5 
          bg-${makeThemeBgColor({ themeMode })}
          text-${makeThemeTextColor({ themeMode })}`}
        >
          <Card.Body>
            <Form onSubmit={handleSubmit(handleEditUser)}>
              <Row className="mb-3 d-flex align-items-end">
                <Col className="px-3 d-flex justify-content-center">
                  <Avatar
                    name={`${
                      user?.name?.firstname ||
                      userData.firstname ||
                      userData.givenName
                    } ${
                      user?.name?.lastname ||
                      userData.lastname ||
                      userData.familyName
                    }`}
                    src={userData.imageUrl}
                    size="100"
                    round={true}
                    color={"grey"}
                  />
                </Col>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>{t("Modal.Name")}</Form.Label>
                  <Form.Control
                    className="text-capitalize"
                    placeholder={
                      user?.name?.firstname ||
                      userData.firstname ||
                      userData.givenName
                    }
                    {...register("firstname")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>{t("Modal.Surname")}</Form.Label>

                  <Form.Control
                    className="text-capitalize"
                    placeholder={
                      user?.name?.lastname ||
                      userData.lastname ||
                      userData.familyName
                    }
                    {...register("lastname")}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>{t("Modal.Email")}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={user?.email || userData.email}
                    {...register("email")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>{t("Modal.Password")}</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    {...register("password")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>{t("Modal.Username")}</Form.Label>
                  <Form.Control
                    placeholder={user?.username || userData.username}
                    {...register("username")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
                  <Form.Label>{t("Modal.Phone")}</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder={user?.phone || userData.phone}
                    {...register("phone")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                  <Form.Label>{t("Modal.City")}</Form.Label>
                  <Form.Control
                    className="text-capitalize"
                    placeholder={user?.address?.city || userData.city}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  controlId="formGridAddress"
                >
                  <Form.Label>{t("Modal.Street")}</Form.Label>
                  <Form.Control
                    className="text-capitalize"
                    placeholder={user?.address?.street}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNumber">
                  <Form.Label>{t("Modal.Number")}</Form.Label>
                  <Form.Control placeholder={user?.address?.number} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>{t("Modal.Zip")}</Form.Label>
                  <Form.Control placeholder={user?.address?.zipcode} />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                variant={themeMode === "light" ? "dark" : "light"}
                className="my-3"
              >
                {t("Modal.Save")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default User;
