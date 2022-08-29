import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { title, price, image, id } = data;
  const { t } = useTranslation();

  return (
    <Col className="col-md-3 mb-4">
      <Card className="h-100 text-center p-4" key={id}>
        <Link to={`/product/id=${id}`}>
          <Card.Img variant="top" style={{ height: "300px" }} src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="lead fw-bold">$ {price}</Card.Text>
          <Button className="text-light bg-dark border-0">
            {t("Cart.Button")}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
