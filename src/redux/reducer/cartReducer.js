import { createSlice } from "@reduxjs/toolkit";

const getIndex = (state, action) => {
  return state.cartList.findIndex((item) => item.id === action.payload.id);
};
const initialState = {
  cartAmount: 0,
  cartTotal: 0,
  cartList: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartList = [];
      state.cartAmount = 0;
      state.cartTotal = 0;
    },
    addToCart(state, action) {
      const itemIndex = getIndex(state, action);
      if (!(itemIndex >= 0)) {
        state.cartList.push({ ...action.payload, productQuantity: 1 });
        state.cartAmount += 1;
        state.cartTotal += action.payload.price;
      } else {
        state.cartList[itemIndex].productQuantity += 1;
        state.cartAmount += 1;
        state.cartTotal += action.payload.price;
      }
    },
    deleteFromCart(state, action) {
      const { productId, index } = action.payload;
      state.cartAmount -= state.cartList[index].productQuantity;
      state.cartTotal -=
        state.cartList[index].price * state.cartList[index].productQuantity;
      state.cartList = state.cartList.filter(
        (cartItem) => cartItem.id !== productId
      );
    },
    decreaseQuantity(state, action) {
      const { productId, index } = action.payload;
      if (state.cartList[index].productQuantity > 1) {
        state.cartList[index].productQuantity -= 1;
        state.cartAmount -= 1;
        state.cartTotal -= state.cartList[index].price;
      } else if (state.cartList[index].productQuantity === 1) {
        state.cartTotal -= state.cartList[index].price;
        const nextCartItems = state.cartList.filter(
          (cartItem) => cartItem.id !== productId
        );
        state.cartList = nextCartItems;
        state.cartAmount -= 1;
      }
    },
    increaseQuantity(state, action) {
      const index = action.payload;
      state.cartList[index].productQuantity += 1;
      state.cartAmount += 1;
      state.cartTotal += state.cartList[index].price;
    },
  },
});

export const {
  clearCart,
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartReducer.actions;
export default cartReducer.reducer;
