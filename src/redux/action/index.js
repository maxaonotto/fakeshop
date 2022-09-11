import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../reducer/cartReducer";

import { deleteUser, editUser, logout } from "../reducer/userReducer";

// for cart
export const handleDecrease = (dispatch, productId) => {
  dispatch(decreaseQuantity(productId));
};
export const handleIncrease = (dispatch, productId) => {
  dispatch(increaseQuantity(productId));
};
export const handleDeleteFromCart = (dispatch, productId, index) => {
  dispatch(deleteFromCart({ productId, index }));
};
// for user
export const handleLogOut = (dispatch) => {
  dispatch(logout());
};
export const handleDeleteUser = (dispatch, userId) => {
  dispatch(deleteUser({ userId }));
};
export const handleEditUser = (dispatch, data) => {
  dispatch(editUser({ ...data }));
};
