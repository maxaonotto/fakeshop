import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/userReducer";
import { GoogleLogin } from "react-google-login";
const LoginTab = ({ onHide }) => {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    dispatch(login(res.profileObj));
    onHide();
  };
  const onFailure = (res) => {
    console.log("Login failed", res);
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Glad to see You (^3^)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Admin" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
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
