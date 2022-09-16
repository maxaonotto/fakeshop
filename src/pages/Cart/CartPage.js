import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil.js";
import { Row, Container, Col } from "react-bootstrap";
import ClearCartButton from "../../components/cart/buttons/ClearCartButton.js";
import ProductCartList from "../../components/cart/ProductCartList.js";
import SubTotalPrice from "../../components/cart/SubTotalPrice.js";

const CartPage = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);

  return (
    <Container fluid>
      <Row
        style={{ height: "6vh" }}
        className={`px-3 fw-bold fs-2 bg-${makeThemeBgColor({ themeMode })} 
        text-${makeThemeTextColor({ themeMode })}`}
      >
        {t("Navbar.Cart")}
      </Row>
      <Row
        style={{ fontSize: 18, height: "3vh" }}
        className={`mb-1 d-flex text-uppercase 
        text-${makeThemeTextColor({ themeMode })}
        bg-${makeThemeBgColor({ themeMode })}`}
      >
        <Col sm={5}>Product</Col>
        <Col sm>Price</Col>
        <Col sm>Quantity</Col>
        <Col sm>Total</Col>
      </Row>
      <ProductCartList />
      <Row
        className={`pt-1 d-flex justify-content-around 
        bg-${makeThemeBgColor({ themeMode })}`}
      >
        <ClearCartButton />
        <SubTotalPrice />
      </Row>
    </Container>
  );
};

export default CartPage;
