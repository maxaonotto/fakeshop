import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const EmptyCart = () => {
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Row
      style={{ height: "65vh", width: "100vw" }}
      className={`bg-${makeThemeBgColor({ themeMode })} 
       text-center`}
    >
      <Col
        style={{ fontSize: "50px", width: "100%" }}
        className={`pt-5 fw-bold text-${makeThemeTextColor({ themeMode })}`}
      >
        {t("Cart.Empty")}
      </Col>
      <Link to="/products" style={{ height: "6vh" }}>
        <Button
          variant={`outline-${themeMode === "light" ? "dark" : "light"}`}
          style={{ width: "45%" }}
          className="p-3 fw-bold"
        >
          {t("Cart.Shopping")}
        </Button>
      </Link>
    </Row>
  );
};

export default EmptyCart;
