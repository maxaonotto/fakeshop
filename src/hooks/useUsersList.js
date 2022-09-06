import { useEffect, useState } from "react";
import { getUsers } from "../service/getUsers";

export default function useUsersList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getUsers()
      .then((res) => setList(res.data))
      .catch(() => setList([]));
  }, []);
  return [list];
}
