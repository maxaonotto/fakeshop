import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import EmptyCart from "../../components/cart/EmptyCart.js";
import ProductsInCart from "../../components/cart/ProductsInCart.js";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  const { cartAmount } = useSelector((state) => state.cart);

  return (
    <Container>
      <Row style={{ fontSize: "30px", width: "100%" }} className="fw-bold">
        {t("Navbar.Cart")}
      </Row>
      {cartAmount === 0 ? <EmptyCart /> : <ProductsInCart />}
    </Container>
  );
};

export default CartPage;
