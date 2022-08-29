import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  ThemeContext,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/ThemeUtil";

const Announcement = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      text-center text-uppercase py-1`}
    >
      <Row>
        <Col className={`text-${makeThemeTextColor({ themeMode })}`}>
          {t("Announcement")}
        </Col>
      </Row>
    </Container>
  );
};

export default Announcement;
