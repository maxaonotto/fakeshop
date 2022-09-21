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
      className={`text-center
      bg-${makeThemeBgColor({ themeMode })}`}
    >
      <Col
        style={{ fontSize: "50px" }}
        className={`py-5 fw-bold text-${makeThemeTextColor({ themeMode })}`}
      >
        {t("Cart.Empty")}
      </Col>
      <Link to="/products" style={{ height: "6%" }} className="py-5">
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
