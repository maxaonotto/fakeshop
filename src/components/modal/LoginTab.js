import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/userReducer";
import { GoogleLogin } from "react-google-login";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { loginUser } from "../../service/getAuthUser";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const LoginTab = ({ onHide }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    loginUser(data).then((res) => {
      console.log(res.data.token);
      onHide();
    });
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
        <Modal.Title>Glad to see You (^3^)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              placeholder="enter username"
              {...register("username", {
                required: "username is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.username && <span>{errors?.username.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
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
            <Form.Check type="checkbox" label="Admin" />
            <Button variant="dark" type="submit">
              Submit
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
