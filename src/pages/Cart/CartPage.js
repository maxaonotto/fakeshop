import React from "react";
import { Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCartAmount } from "../../redux/selectors/index.js";

import EmptyCart from "../../components/cart/EmptyCart.js";
import ProductsInCart from "../../components/cart/ProductsInCart.js";

const CartPage = () => {
  const cartAmount = useSelector(selectCartAmount);
  const { t } = useTranslation();

  return (
    <Container fluid className="px-5">
      <Row style={{ fontSize: "30px", width: "100%" }} className="fw-bold">
        {t("Navbar.Cart")}
      </Row>
      {cartAmount === 0 ? <EmptyCart /> : <ProductsInCart />}
    </Container>
  );
};

export default CartPage;
