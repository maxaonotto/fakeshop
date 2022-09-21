import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Confirmation = ({ show, handleClose, handleAction }) => {
  const { t } = useTranslation();
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      size="sm"
      centered
    >
      <Modal.Header>
        <Modal.Title>{t("Cart.Sure")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Button variant="dark" onClick={handleClose}>
          {t("No")}
        </Button>
        <Button variant="dark" onClick={handleAction}>
          {t("Yes")}
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default Confirmation;
