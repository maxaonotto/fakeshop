import { createSlice } from "@reduxjs/toolkit";

const isLoginReducer = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isLogin: false,
  },
  reducers: {},
});
export default isLoginReducer.reducer;
