import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isLogin: false,
  },
  reducers: {},
});

export default userReducer.reducer;
