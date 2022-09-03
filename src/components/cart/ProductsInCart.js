import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/reducer/cartReducer.js";

import { Button, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../util/ThemeUtil.js";
import SubTotalPrice from "./SubTotalPrice.js";
import ProductCartList from "./ProductCartList.js";

const CartProducts = () => {
  const { themeMode } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <Row style={{ fontSize: 18 }} className="d-flex text-uppercase">
        <Col sm={5}>Product</Col>
        <Col sm>Price</Col>
        <Col sm>Quantity</Col>
        <Col sm>Total</Col>
      </Row>
      <ProductCartList />
      <Row className="d-flex justify-content-around">
        <Button
          variant={themeMode === "light" ? "dark" : "light"}
          style={{ width: "45%" }}
          className="py-3 ml-5 "
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </Button>
        <SubTotalPrice />
      </Row>
    </>
  );
};
export default CartProducts;
