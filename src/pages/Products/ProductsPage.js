import React, { useState } from "react";
import Products from "../../components/product/Products";
import LoadMoreButton from "../../components/product/LoadMoreButton";
import { Container } from "react-bootstrap";

const ProductsPage = () => {
  const [loadMore, setLoadMore] = useState(6);
  return (
    <Container fluid>
      <Products loadMore={loadMore} isFilterVisible />
      <LoadMoreButton setLoadMore={setLoadMore} />
    </Container>
  );
};

export default ProductsPage;
