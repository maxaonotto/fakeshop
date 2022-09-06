import axios from "axios";

const userUrl = "https://fakestoreapi.com/users";

export const getUsers = () => {
  return axios.get(`${userUrl}`);
};
