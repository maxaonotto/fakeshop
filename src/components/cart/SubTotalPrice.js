import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/selectors";
import { Button, Card } from "react-bootstrap";
import useTotalPrice from "../../hooks/useTotalPrice.js";

const SubTotalPrice = () => {
  const cartTotal = useSelector(selectCartTotal);
  // eslint-disable-next-line
  const totalPrice = useTotalPrice();
  return (
    <Card
      style={{ width: "45%" }}
      className="p-0 d-flex flex-row justify-content-between"
    >
      <Card.Text className="fw-bold fs-4 m-2">
        SubTotal: $ {cartTotal}
      </Card.Text>
      <Button variant="dark">Purchase</Button>
    </Card>
  );
};

export default SubTotalPrice;
