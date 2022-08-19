import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Product = ({ data }) => {
  const { title, price, image, id, description } = data;

  return (
    <Col className="p-3 d-flex">
      <Card style={{ width: "25%" }} className="flex-fill" id={id}>
        <Card.Img
          variant="top"
          style={{ height: "500px" }}
          className="p-3"
          src={image}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>$ {price}</Card.Text>
          <Button className="text-light bg-dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title
