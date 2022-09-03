import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartList } from "../../redux/selectors";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../util/ThemeUtil";
import { Button, Card, Col, Row } from "react-bootstrap";
import SetProductQuantity from "./SetProductQuantity";
import { handleDeleteFromCart } from "../../redux/action";

const ProductCartList = () => {
  const { themeMode } = useContext(ThemeContext);
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();
  return cartList.map((product, index) => (
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

            <Card.Title className="m-5">
              <Card.Text className="text-uppercase">{product.title}</Card.Text>
              <Button
                variant={themeMode === "light" ? "dark" : "light"}
                className="my-5 "
                onClick={() =>
                  handleDeleteFromCart(dispatch, product.id, index)
                }
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
          <SetProductQuantity
            productId={product.id}
            quantity={product.productQuantity}
          />
          <Col sm className="d-flex justify-content-center align-items-center">
            <Card.Text className="fw-bold fs-5">
              $ {(product.price * product.productQuantity).toFixed(2)}
            </Card.Text>
          </Col>
        </Card.Body>
      </Card>
    </Row>
  ));
};

export default ProductCartList;
