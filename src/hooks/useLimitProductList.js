import { useEffect, useState } from "react";
import { getListOfProducts } from "../service/getProducts";

export default function useLimitProductList(isLimited = false) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getListOfProducts(isLimited)
      .then((res) => setList(res.data))
      .catch(() => setList([]));
  }, [isLimited]);
  return [list, setList];
}
