import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isLoged: false,
  },
  reducers: {
    login(state, action) {
      state.userData = action.payload;
      localStorage.setItem("UserData", JSON.stringify(action.payload));
      state.isLoged = true;
    },
    logout(state) {
      state.userData = null;
      state.isLoged = false;
      localStorage.removeItem("UserData");
    },
  },
});
export const { login, logout } = userReducer.actions;
export default userReducer.reducer;
