import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clearCart } from "../../redux/reducer/cartReducer.js";
import { selectCartList } from "../../redux/selectors/index.js";
import { Link } from "react-router-dom";

import { Button, Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../util/ThemeUtil.js";
import SubTotalPrice from "./SubTotalPrice.js";
import SetQuantity from "./SetQuantity.js";

const CartProducts = () => {
  const { themeMode } = useContext(ThemeContext);

  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();

  return (
    <>
      <Row style={{ fontSize: 18 }} className="d-flex text-uppercase">
        <Col sm={5}>Product</Col>
        <Col sm>Price</Col>
        <Col sm>Quantity</Col>
        <Col sm>Total</Col>
      </Row>
      <Row>
        {cartList.map((product) => (
          <Row key={product.id} className=" my-2">
            <Card>
              <Card.Body className="d-flex flex-row mx-1 px-1 ">
                <Col sm={4} className="d-flex flex-row text-center">
                  <Link to={`/product/id=${product.id}`}>
                    <Card.Img
                      variant="left"
                      width="250px"
                      height="250px"
                      src={product.image}
                      className=""
                    />
                  </Link>

                  <Card.Title className="text-uppercase m-4">
                    {product.title}
                    <Button
                      variant={themeMode === "light" ? "dark" : "light"}
                      className="my-5 "
                      onClick={() => dispatch(deleteFromCart(product.id))}
                    >
                      Delete
                    </Button>
                  </Card.Title>
                </Col>
                <Col
                  sm
                  style={{ width: "100%" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Text
                    variant={themeMode === "light" ? "dark" : "light"}
                    className="fw-bold fs-5"
                  >
                    $ {product.price}
                  </Card.Text>
                </Col>
                <SetQuantity
                  product={product}
                  quantity={product.productQuantity}
                />
                <Col
                  sm
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Text className="fw-bold fs-5">
                    $ {product.price * product.productQuantity}
                  </Card.Text>
                </Col>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Row>
      <Row className="d-flex justify-content-around">
        <Button
          variant={themeMode === "light" ? "dark" : "light"}
          style={{ width: "45%" }}
          className="py-3 ml-5 "
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
        <SubTotalPrice />
      </Row>
    </>
  );
};
export default CartProducts;
