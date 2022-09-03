export const selectCartList = (state) => state.cart.cartList;

export const selectCartAmount = (state) => state.cart.cartAmount;

export const selectCartTotal = (state) => state.cart.cartTotal.toFixed(2);
