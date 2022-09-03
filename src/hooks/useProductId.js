import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../service/getProducts";

export default function useProductId() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId, setProduct);
  }, [productId]);

  return [product, setProduct];
}
