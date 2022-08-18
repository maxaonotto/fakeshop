import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Announcement = ({ darkMode }) => {
  return (
    <Container>
      <Row>
        <Col
          className={`text-${
            darkMode === "light" ? "dark" : "light"
          } bg-${darkMode} text-center text-uppercase py-1`}
        >
          Fashion everywhere
        </Col>
      </Row>
    </Container>
  );
};

export default Announcement;
