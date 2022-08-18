import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = ({ darkMode }) => {
  return (
    <Container>
      <Row
        className={`text-${
          darkMode === "light" ? "dark" : "light"
        } bg-${darkMode} text-center py-3`}
      >
        <Col>Copyright &copy; FakeShop</Col>
      </Row>
    </Container>
  );
};

export default Footer;
