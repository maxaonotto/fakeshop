import axios from "axios";

const userUrl = "https://fakestoreapi.com/users";

export const getUsersList = () => {
  return axios.get(`${userUrl}`);
};

export const getUser = (id, setState) => {
  axios
    .get(`${userUrl}/${id}`)
    .then((res) => setState(res.data))
    .catch(() => setState({}));
};
