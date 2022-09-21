import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SuccessPurchase = ({ show, onHide }) => {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={onHide} animation={false} size="md" centered>
      <Modal.Header className="">
        <Modal.Title>{t("Cart.Success")}</Modal.Title>
      </Modal.Header>
      <Modal.Body as="h3">{t("Cart.Enjoy")}</Modal.Body>
      <Modal.Footer>{t("Cart.Again")}</Modal.Footer>
    </Modal>
  );
};

export default SuccessPurchase;
