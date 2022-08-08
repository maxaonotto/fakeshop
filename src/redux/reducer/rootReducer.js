import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import isLoginReducer from "./isLoginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: isLoginReducer,
});
export default rootReducer;
