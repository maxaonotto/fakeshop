import React from "react";
import { useDispatch } from "react-redux";

import { Button, ButtonGroup, Col, Form } from "react-bootstrap";
import { handleDecrease, handleIncrease } from "../../redux/action";

const SetProductQuantity = ({ quantity, productId }) => {
  const dispatch = useDispatch();

  return (
    <Col sm className="d-flex justify-content-center align-items-center">
      <ButtonGroup className="border border-dark d-flex justify-content-center align-items-center">
        <Button
          variant="dark"
          className="m-2"
          onClick={() => handleDecrease(dispatch, productId)}
        >
          -
        </Button>
        <Form.Label className="fs-5 fw-bold ">{quantity}</Form.Label>
        <Button
          variant="dark"
          className="m-2"
          onClick={() => handleIncrease(dispatch, productId)}
        >
          +
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default SetProductQuantity;
