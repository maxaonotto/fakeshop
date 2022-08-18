import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../service/getProducts";

export default function useProductId() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id, setProduct);
  }, [id]);

  return [product, setProduct];
}
