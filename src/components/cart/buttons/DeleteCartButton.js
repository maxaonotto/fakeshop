import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { handleDeleteFromCart } from "../../../redux/action";
import Confirmation from "../../modal/Confirmation";

const DeleteCartButton = ({ productId, index }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteFromCart = () => {
    handleDeleteFromCart(dispatch, productId, index);
    handleClose();
  };

  return (
    <>
      <Button variant="dark" className="my-1" onClick={handleShow}>
        {t("Cart.Delete")}
      </Button>
      <Confirmation
        show={show}
        handleClose={handleClose}
        handleAction={deleteFromCart}
      />
    </>
  );
};

export default DeleteCartButton;
