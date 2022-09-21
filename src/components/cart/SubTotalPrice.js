import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal, selectLogin } from "../../redux/selectors";
import { Button, Card } from "react-bootstrap";
import Login from "../modal/Login";
import SuccessPurchase from "../modal/SuccessPurchase";
import { handleClearCart } from "../../redux/action";
import { useTranslation } from "react-i18next";

const SubTotalPrice = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const isLogin = useSelector(selectLogin);
  const [successPurchase, setSuccessPurchase] = useState(false);
  const [modal, setModal] = useState(false);
  const handleLogin = () => setModal(true);
  const navigate = useNavigate();
  const handleSuccess = () => {
    setSuccessPurchase(true);
    setTimeout(() => {
      navigate("/");
      handleClearCart(dispatch);
    }, 2000);
  };
  if (cartTotal === "0.00") {
    return <></>;
  }
  return (
    <Card
      style={{ width: "45%" }}
      className="p-0 d-flex flex-row justify-content-between"
    >
      <Card.Text className="fw-bold fs-4 m-2">
        {t("Cart.Subtotal")}: $ {Math.abs(cartTotal)}
      </Card.Text>
      <Button
        variant="dark"
        className="p-3"
        onClick={isLogin ? handleSuccess : handleLogin}
      >
        {t("Cart.Purchase")}
      </Button>
      <Login show={modal} onHide={() => setModal(false)} />
      <SuccessPurchase
        show={successPurchase}
        onHide={() => setSuccessPurchase(false)}
      />
    </Card>
  );
};

export default SubTotalPrice;
