import { createSlice } from "@reduxjs/toolkit";

const getIndex = (state, action) => {
  return state.cartList.findIndex((item) => item.id === action.payload);
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
      const itemIndex = getIndex(state, action);
      if (state.cartList[itemIndex].productQuantity > 1) {
        state.cartList[itemIndex].productQuantity -= 1;
        state.cartAmount -= 1;
        state.cartTotal -= state.cartList[itemIndex].price;
      } else if (state.cartList[itemIndex].productQuantity === 1) {
        state.cartTotal -= state.cartList[itemIndex].price;
        const nextCartItems = state.cartList.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.cartList = nextCartItems;
        state.cartAmount -= 1;
      }
    },
    increaseQuantity(state, action) {
      const itemIndex = getIndex(state, action);
      state.cartList[itemIndex].productQuantity += 1;
      state.cartAmount += 1;
      state.cartTotal += state.cartList[itemIndex].price;
      // state.cartList = state.cartList.map((product) => {
      //     if (product.id === action.payload.id) {
      //       return { ...product,
      //       product.productQuantity += 1,
      //       state.cartAmount += 1,
      //   state.cartTotal += product.price}
      //     }}
      // );
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
