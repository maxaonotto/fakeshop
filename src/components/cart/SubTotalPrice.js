import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotal, selectLogin } from "../../redux/selectors";
import { Button, Card } from "react-bootstrap";
import Login from "../modal/Login";
import SuccessPurchase from "../modal/SuccessPurchase";

const SubTotalPrice = () => {
  const cartTotal = useSelector(selectCartTotal);
  const isLogin = useSelector(selectLogin);
  const [modal, setModal] = useState(false);
  // const needLogin = () => setModal(true);
  // const navigate = useNavigate();
  // const successPurchase = () => {
  // setTimeout(() => {
  //   setModal(true);
  // }, 1000);
  // setTimeout(() => {
  //   navigate("/");
  // }, 500);
  // };
  return (
    <Card
      style={{ width: "45%" }}
      className="p-0 d-flex flex-row justify-content-between"
    >
      <Card.Text className="fw-bold fs-4 m-2">
        SubTotal: $ {cartTotal}
      </Card.Text>
      <Button
        variant="dark"
        className="p-3"
        onClick={isLogin ? <Login /> : <SuccessPurchase />}
      >
        Purchase
      </Button>
      {/* // <Login show={modal} onHide={() => setModal(false)} /> */}
      {/* // <SuccessPurchase show={modal} onHide={() => setModal(false)} /> */}
    </Card>
  );
};

export default SubTotalPrice;
