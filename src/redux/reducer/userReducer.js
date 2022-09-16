import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isLoged: false,
  userList: [],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userData = action.payload;
      localStorage.setItem("UserData", JSON.stringify(action.payload));
      state.isLoged = true;
    },
    logout(state) {
      state.userData = null;
      state.isLoged = false;
      localStorage.clear();
    },
    deleteUser(state, action) {
      const { userId } = action.payload;
      state.userList = state.userList.filter(
        (userItem) => userItem.id !== userId
      );
    },
    addNewUser(state, action) {
      state.userData = action.payload;
      localStorage.setItem("UserData", JSON.stringify(action.payload));
      state.isLoged = true;
      state.userList = [...state.userList, action.payload];
    },
    editUser(state, action) {
      state.userList.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    },
    setUsersList(state, action) {
      if (state.userList.length <= 1)
        state.userList = [...state.userList, ...action.payload];
    },
  },
});

export const { login, logout, setUsersList, deleteUser, editUser, addNewUser } =
  userReducer.actions;
export default userReducer.reducer;
