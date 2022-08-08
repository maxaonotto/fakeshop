import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducer: {},
});
export default cartReducer.reducer;
