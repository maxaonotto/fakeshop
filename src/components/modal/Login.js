import { Tab, Tabs } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";

function Login(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Tabs
        id="fill-tab-example"
        transition={true}
        className="fs-3 d-flex flex-row justify-content-around"
      >
        <Tab eventKey="home" title="Login" className="px-2">
          <LoginTab onHide={props.onHide} />
        </Tab>
        <Tab eventKey="profile" title="Register" className="px-2">
          <RegisterTab onHide={props.onHide} />
        </Tab>
      </Tabs>
    </Modal>
  );
}

export default Login;
