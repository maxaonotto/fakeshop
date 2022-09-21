import { useEffect, useState } from "react";
import { getListOfProducts } from "../service/getProducts";

export default function useProductCategory() {
  const [category, setCategory] = useState({});
  console.log(category);
  useEffect(() => {
    getListOfProducts()
      .then((res) => setCategory(res.data))
      .catch(() => setCategory([]));
  }, []);

  return [category, setCategory];
}
