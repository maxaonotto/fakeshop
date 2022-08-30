import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/reducer/cartReducer";
import { Button, ButtonGroup, Col, Form } from "react-bootstrap";
import { ThemeContext } from "../../util/ThemeUtil";

const SetQuantity = ({ quantity, product }) => {
  const { themeMode } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <Col sm className="d-flex justify-content-center align-items-center">
      <ButtonGroup className="border border-dark d-flex justify-content-center align-items-center">
        <Button
          variant={themeMode === "light" ? "dark" : "light"}
          className="m-2"
          onClick={() => dispatch(decreaseQuantity(product))}
        >
          -
        </Button>
        <Form.Label className="fs-5 fw-bold ">{quantity}</Form.Label>
        <Button
          variant={themeMode === "light" ? "dark" : "light"}
          className="m-2"
          onClick={() => dispatch(increaseQuantity(product))}
        >
          +
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default SetQuantity;
