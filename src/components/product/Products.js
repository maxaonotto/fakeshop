import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { getProducts } from "../../service/getProducts";
import Product from "./Product";

const Products = ({ isLimited }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    isLimited ? getProducts(setList, isLimited) : getProducts(setList);
  }, [isLimited]);

  return (
    <Container className="">
      <Row className="row-cols-3">
        {list.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
