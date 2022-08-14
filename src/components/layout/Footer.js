import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/utilForTheme";
const Footer = () => {
  const { themeMode } = useContext(Context);
  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      text-center py-3`}
    >
      <Row>
        <Col className={`text-${makeThemeTextColor({ themeMode })}`}>
          Copyright &copy; FakeShop
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
