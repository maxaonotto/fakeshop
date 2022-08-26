import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    cartAmount: 0,
    cartTotal: 0,
  },
  reducers: {
    clearCart(state) {
      state.cartList = [];
      state.cartAmount = 0;
    },
    addToCart(state, action) {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (!(itemIndex >= 0)) {
        state.cartList.push({ ...action.payload, productQuantity: 1 });
        state.cartAmount += 1;
      }
    },
    deleteFromCart(state, action) {
      const itemId = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== itemId);
      state.cartAmount -= 1;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartList[itemIndex].productQuantity > 1) {
        state.cartList[itemIndex].productQuantity -= 1;
        state.cartAmount -= 1;
      } else if (state.cartList[itemIndex].productQuantity === 1) {
        const nextCartItems = state.cartList.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartList = nextCartItems;
        state.cartAmount -= 1;
      }
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartList[itemIndex].productQuantity += 1;
      state.cartAmount += 1;
    },
    totalPrice(state) {
      let { total } = state.cartList.reduce(
        (cartTotal, cartItem) => {
          const { price, productQuantity } = cartItem;
          const itemTotal = price * productQuantity;

          cartTotal.total += itemTotal;
          return cartTotal;
        },
        { total: 0 }
      );
      state.cartTotal = total;
    },
  },
});

export const {
  clearCart,
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
} = cartReducer.actions;
export default cartReducer.reducer;
