import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import EmptyCart from "../../components/cart/EmptyCart.js";
import ProductsInCart from "../../components/cart/ProductsInCart.js";
import { useTranslation } from "react-i18next";
import { totalPrice } from "../../redux/reducer/cartReducer.js";

const CartPage = () => {
  const { t } = useTranslation();
  const { cartAmount, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [cartList, dispatch]);
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
