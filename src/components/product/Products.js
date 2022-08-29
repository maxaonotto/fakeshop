import React, { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import useLimitList from "../../hooks/useLimitList";
import { ThemeContext, makeThemeBgColor } from "../../util/ThemeUtil";
import Product from "./Product";

const Products = ({ isLimited }) => {
  const { themeMode } = useContext(ThemeContext);
  const [list] = useLimitList(isLimited);

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
