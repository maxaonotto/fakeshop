import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../reducer/cartReducer";

export const handleDecrease = (dispatch, productId) => {
  dispatch(decreaseQuantity(productId));
};
export const handleIncrease = (dispatch, productId) => {
  dispatch(increaseQuantity(productId));
};
export const handleDeleteFromCart = (dispatch, productId, index) => {
  dispatch(deleteFromCart({ productId, index }));
};
