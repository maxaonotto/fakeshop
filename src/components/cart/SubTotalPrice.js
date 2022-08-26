import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const SubTotalPrice = () => {
  const { cartTotal } = useSelector((state) => state.cart);

  return (
    <Card
      style={{ width: "45%" }}
      className="p-0 d-flex flex-row justify-content-between"
    >
      <Card.Text className="fw-bold fs-4 m-2">
        SubTotal: $ {cartTotal.toFixed(2)}
      </Card.Text>
      <Button variant="dark">Purchase</Button>
    </Card>
  );
};

export default SubTotalPrice;
