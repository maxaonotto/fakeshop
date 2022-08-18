import axios from "axios";
const productUrl = "https://fakestoreapi.com/products";

export const getListOfProducts = (setList, limit = false) => {
  axios
    .get(`${productUrl}${limit ? "?limit=6" : ""}`)
    .then((res) => setList(res.data));
};

export const getProduct = (id, setState) => {
  axios
    .get(`${productUrl}/${id}`)
    .then((res) => setState(res.data))
    .catch(() => setState({}));
};
