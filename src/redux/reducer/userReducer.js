import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isLoged: false,
  },
  reducers: {},
});

export default userReducer.reducer;
