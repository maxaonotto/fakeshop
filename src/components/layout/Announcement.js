import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/ThemeUtil";

const Announcement = () => {
  const { t, themeMode } = useContext(Context);
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
