import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../util/ThemeUtil";

const EmptyCart = () => {
  const { themeMode } = useContext(Context);

  return (
    <Container
      fluid
      style={{ height: "66vh" }}
      className={`bg-${makeThemeBgColor({ themeMode })} 
       text-center py-5`}
    >
      <Row>
        <Col
          style={{ fontSize: "50px" }}
          className={`fw-bold text-${makeThemeTextColor({
            themeMode,
          })}`}
        >
          Your cart is currently empty
        </Col>
      </Row>
      <Link to="/products">
        <Button
          variant="outline-dark"
          style={{ width: "45%" }}
          className="py-3 mt-5 fw-bold"
        >
          Go Shopping
        </Button>
      </Link>
    </Container>
  );
};

export default EmptyCart;
