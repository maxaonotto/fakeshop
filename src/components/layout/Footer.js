import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/ThemeUtil";

const Footer = () => {
  const { t, themeMode } = useContext(Context);
  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      text-center py-3`}
    >
      <Row>
        <Col className={`text-${makeThemeTextColor({ themeMode })}`}>
          {t("Footer")} &copy; FakeShop
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
