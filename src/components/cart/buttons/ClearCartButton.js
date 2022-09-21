import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { handleClearCart } from "../../../redux/action";
import { selectCartList } from "../../../redux/selectors";
import { ThemeContext } from "../../../util/ThemeUtil";
import Confirmation from "../../modal/Confirmation";

const ClearCartButton = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearCart = () => {
    handleClearCart(dispatch);
    handleClose();
  };

  if (cartList.length === 0) {
    return <></>;
  }
  return (
    <>
      <Button
        variant={themeMode === "light" ? "dark" : "light"}
        style={{ width: "45%" }}
        className="py-3 ml-5 fw-bold"
        onClick={handleShow}
      >
        {t("Cart.Clear")}
      </Button>
      <Confirmation
        show={show}
        handleClose={handleClose}
        handleAction={clearCart}
      />
    </>
  );
};

export default ClearCartButton;
