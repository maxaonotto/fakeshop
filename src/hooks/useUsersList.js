import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../service/getUsers";
import { setUsersList } from "../redux/reducer/userReducer";
import { selectUserList } from "../redux/selectors";

export default function useUsersList() {
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(userList);
  }, [userList]);

  useEffect(() => {
    getUsersList()
      .then((res) => {
        dispatch(setUsersList(res.data));
      })
      .catch((error) => console.error(error.response));
  }, [dispatch]);

  return [list];
}
