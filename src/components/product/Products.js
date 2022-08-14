import React, { useState, useEffect, useContext } from "react";
import { Row, Container } from "react-bootstrap";
import { getProducts } from "../../service/getProducts";
import { Context, makeThemeBgColor } from "../../util/utilForTheme";
import Product from "./Product";

const Products = ({ isLimited }) => {
  const { themeMode } = useContext(Context);
  const [list, setList] = useState([]);

  useEffect(() => {
    isLimited ? getProducts(setList, isLimited) : getProducts(setList);
  }, [isLimited]);

  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      `}
    >
      <Row className="row-cols-3">
        {list.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
