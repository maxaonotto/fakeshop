import { useEffect, useState } from "react";
import { getListOfProducts } from "../service/getProducts";

export default function useLimitList(isLimited) {
  const [list, setList] = useState([]);
  useEffect(() => {
    isLimited
      ? getListOfProducts(setList, isLimited)
      : getListOfProducts(setList);
  }, [isLimited]);
  return [list, setList];
}
