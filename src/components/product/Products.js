import React, { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import useLimitList from "../../hooks/useLimitList";
import { Context, makeThemeBgColor } from "../../util/ThemeUtil";
import Product from "./Product";

const Products = ({ isLimited }) => {
  const { themeMode } = useContext(Context);
  const [list] = useLimitList(isLimited);

  return (
    <Container
      fluid
      className={`bg-${makeThemeBgColor({ themeMode })} 
      `}
    >
      <Row>
        {list.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
