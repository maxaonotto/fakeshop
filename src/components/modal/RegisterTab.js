import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const RegisterTab = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          What a nice meeting (^_^)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Enter your surname" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>UserName</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Row>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="py-3 w-100 d-flex justify-content-center">
        <Button variant="outline-dark">
          <Form className="d-flex justify-content-center align-items-center">
            <Form.Group>
              <FontAwesomeIcon icon={faGoogle} className="px-2" />
              <Form.Label className="m-0">Register with Google</Form.Label>
            </Form.Group>
          </Form>
        </Button>
      </Modal.Footer>
    </>
  );
};
export default RegisterTab;
