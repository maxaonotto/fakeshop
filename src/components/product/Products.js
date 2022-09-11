import React, { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import useLimitProductList from "../../hooks/useLimitProductList";
import { ThemeContext, makeThemeBgColor } from "../../util/ThemeUtil";
import Product from "./Product";

const Products = ({ isLimited }) => {
  const { themeMode } = useContext(ThemeContext);
  const [list] = useLimitProductList(isLimited);

  return (
    <Container fluid className={makeThemeBgColor({ themeMode })}>
      <Row>
        {list.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
