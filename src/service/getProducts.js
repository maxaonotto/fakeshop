import axios from "axios";

export const getProducts = (setList, limit = false) => {
  axios
    .get(`https://fakestoreapi.com/products${limit ? "?limit=6" : ""}`)
    .then((res) => setList(res.data));
};
