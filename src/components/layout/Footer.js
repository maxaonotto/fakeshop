import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  ThemeContext,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/ThemeUtil";

const Footer = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();

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
