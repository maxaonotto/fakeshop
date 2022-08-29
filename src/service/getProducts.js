import axios from "axios";
const productUrl = "https://fakestoreapi.com/products";

export const getListOfProducts = (limit = false) => {
  return axios.get(`${productUrl}${limit ? "?limit=6" : ""}`);
};

export const getProduct = (id, setState) => {
  axios
    .get(`${productUrl}/${id}`)
    .then((res) => setState(res.data))
    .catch(() => setState({}));
};
