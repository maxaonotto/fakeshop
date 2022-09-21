// for cart
export const selectCartList = (state) => state.cart.cartList;

export const selectCartAmount = (state) => state.cart.cartAmount;

export const selectCartTotal = (state) => state.cart.cartTotal.toFixed(2);
// for user
export const selectUserData = (state) => state.user.userData;

export const selectLogin = (state) => state.user.isLoged;

export const selectUserList = (state) => state.user.userList;

export const selectAdmin = (state) => state.user.isAdmin;
