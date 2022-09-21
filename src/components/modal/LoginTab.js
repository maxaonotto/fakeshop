import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login, setAdmin } from "../../redux/reducer/userReducer";
import { loginUser } from "../../service/getAuthUser";
import { useForm } from "react-hook-form";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const LoginTab = ({ onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const handleCheckbox = () => {
    dispatch(setAdmin());
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    loginUser(data)
      .then((res) => {
        dispatch(
          login({
            token: res.data.token,
            username: data.username,
            firstname: "newUser",
            lastname: "newUser",
          })
        );
        onHide();
      })
      .catch((error) => setError(error.response.data));
  const onSuccess = (res) => {
    dispatch(login(res.profileObj));
    onHide();
  };
  const onFailure = (res) => {
    console.log("Login failed", res);
  };
  useEffect(() => {
    // eslint-disable-next-line
    function start() {
      gapi.client.init({
        clientId:
          "688558443667-21hjlen2re7kncq8st7s7keu8eoh9s2i.apps.googleusercontent.com",
        scope: "",
      });
      gapi.load("client: auth", start);
    }
  }, []);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t("Modal.Greet")} (^3^)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label style={{ color: "red" }}>
            {error && <span>{error}</span>}
          </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("Modal.Username")}</Form.Label>
            <Form.Control
              placeholder="username"
              {...register("username", {
                required: "username is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.username && <span>{errors?.username.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>{t("Modal.Password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              {...register("password", {
                required: "password is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.password && <span>{errors?.password.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group
            className="d-flex flex-row justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              label={t("Modal.Admin")}
              onChange={handleCheckbox}
            />
            <Button variant="dark" type="submit">
              {t("Modal.Submit")}
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center ">
        <GoogleLogin
          clientId="688558443667-21hjlen2re7kncq8st7s7keu8eoh9s2i.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          buttonText="Login with Google"
        />
      </Modal.Footer>
    </>
  );
};

export default LoginTab;
