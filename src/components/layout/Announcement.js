import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/utilForTheme";

const Announcement = () => {
  const { themeMode } = useContext(Context);
  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      text-center text-uppercase py-1`}
    >
      <Row>
        <Col className={`text-${makeThemeTextColor({ themeMode })}`}>
          Fashion everywhere
        </Col>
      </Row>
    </Container>
  );
};

export default Announcement;
