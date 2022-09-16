import React from "react";
import { Modal } from "react-bootstrap";

const SuccessPurchase = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} animation={false} size="md" centered>
      <Modal.Header className="">
        <Modal.Title>Purchase success</Modal.Title>
      </Modal.Header>
      <Modal.Body as="h3" className="">
        Enjoy your shopping
      </Modal.Body>
      <Modal.Footer>Waiting for you again!</Modal.Footer>
    </Modal>
  );
};

export default SuccessPurchase;
