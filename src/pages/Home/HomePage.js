import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../../components/navigation/Corausel";
import Products from "../../components/product/Products";

const HomePage = () => {
  return (
    <Container fluid>
      <Carousel />
      <Products isLimited />
    </Container>
  );
};

export default HomePage;
