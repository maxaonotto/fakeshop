import React from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmationForCart = ({ show, handleClose, handleAction }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      size="sm"
      centered
    >
      <Modal.Header>
        <Modal.Title>Delete for sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Button variant="dark" onClick={handleClose}>
          No
        </Button>
        <Button variant="dark" onClick={handleAction}>
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationForCart;
