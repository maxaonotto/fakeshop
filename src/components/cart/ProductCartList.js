import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCartList } from "../../redux/selectors";
import { Link } from "react-router-dom";

import { makeThemeBgColor, ThemeContext } from "../../util/ThemeUtil";
import { Card, Col, Row } from "react-bootstrap";
import SetProductQuantity from "./SetProductQuantity";
import EmptyCart from "./EmptyCart";
import DeleteCartButton from "./buttons/DeleteCartButton";

const ProductCartList = () => {
  const { themeMode } = useContext(ThemeContext);
  const cartList = useSelector(selectCartList);

  if (cartList.length === 0) {
    return <EmptyCart />;
  }
  return cartList.map((product, index) => (
    <Row
      key={product.id}
      className={`flex-xl-row flex-lg-column px-5 py-1 
      bg-${makeThemeBgColor({ themeMode })}`}
    >
      <Card>
        <Card.Body className="d-flex flex-row mx-1 px-1 ">
          <Col sm={4} className="d-flex flex-row text-center">
            <Link to={`/product/id=${product.id}`}>
              <Card.Img
                variant="left"
                width="200px"
                height="200px"
                src={product.image}
              />
            </Link>
            <Card.Title className="pt-3 m-1">
              <Card.Text className="text-uppercase fs-6">
                {product.title}
              </Card.Text>
              <DeleteCartButton productId={product.id} index={index} />
            </Card.Title>
          </Col>
          <Col
            sm
            style={{ width: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Text variant="dark" className="fw-bold fs-5">
              $ {product.price}
            </Card.Text>
          </Col>
          <SetProductQuantity
            productId={product.id}
            quantity={product.productQuantity}
            index={index}
          />
          <Col
            sm={3}
            className="d-flex justify-content-center align-items-center"
          >
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
