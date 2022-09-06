import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Avatar from "react-avatar";

const User = () => {
  return (
    <Card
      size="lg"
      aria-labelledby="contained-Card-title-vcenter"
      className="mx-5"
    >
      <Card.Body>
        <Form>
          <Row className="mb-3 d-flex align-items-end">
            <Col className="px-3 d-flex justify-content-center">
              <Avatar
                name={"User Name"}
                size="100"
                round={true}
                color={"grey"}
              />
            </Col>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="Your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Your surname" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
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
            <Form.Group className="mb-3" as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Street</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control placeholder="12345" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Your phone number" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default User;
