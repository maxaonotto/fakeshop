import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleDeleteFromCart } from "../../../redux/action";
import ConfirmationForCart from "../../modal/ConfirmationForCart";

const DeleteCartButton = ({ productId, index }) => {
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
        Delete
      </Button>
      <ConfirmationForCart
        show={show}
        handleClose={handleClose}
        handleAction={deleteFromCart}
      />
    </>
  );
};

export default DeleteCartButton;
