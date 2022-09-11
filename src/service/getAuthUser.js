import axios from "axios";
const loginUrl = "https://fakestoreapi.com/auth/login";

export const loginUser = (data) => {
  return axios.post(loginUrl, data);
};
