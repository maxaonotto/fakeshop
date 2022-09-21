import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import useLimitProductList from "../../hooks/useLimitProductList";
import { ThemeContext, makeThemeBgColor } from "../../util/ThemeUtil";
import FilterProduct from "./FilterProduct";
import Product from "./Product";

const Products = ({ isLimited, loadMore, isFilterVisible = false }) => {
  const { themeMode } = useContext(ThemeContext);
  const [list, setList] = useLimitProductList(isLimited);

  return (
    <>
      {isFilterVisible && <FilterProduct setList={setList} />}
      <Row
        className={`m-0 d-flex justify-content-center 
        bg-${makeThemeBgColor({ themeMode })}`}
      >
        {list.slice(0, loadMore).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </>
  );
};

export default Products;
