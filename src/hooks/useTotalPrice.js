import { useEffect } from "react";
import { selectCartList } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { totalPrice } from "../redux/reducer/cartReducer";

export default function useTotalPrice() {
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [cartList, dispatch]);

  return [totalPrice];
}
