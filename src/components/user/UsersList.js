import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleDeleteUser } from "../../redux/action";
import useUsersList from "../../hooks/useUsersList";

import { ThemeContext } from "../../util/ThemeUtil";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectUserData } from "../../redux/selectors";

const UsersList = () => {
  const { themeMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [list] = useUsersList();
  return (
    list.length >= 1 &&
    list.map((user) => (
      <tbody key={user.id}>
        <tr>
          <td className="text-capitalize">
            {user.name?.lastname} {user.name?.firstname}
          </td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <Link
              to={`/user/id=${user.id || userData.googleId}`}
              style={{ color: themeMode === "light" ? "black" : "White" }}
            >
              <FontAwesomeIcon className="p-1 me-1" size="xl" icon={faPen} />
            </Link>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              className="p-1"
              size="xl"
              icon={faTrash}
              onClick={() => handleDeleteUser(dispatch, user.id)}
            />
          </td>
        </tr>
      </tbody>
    ))
  );
};

export default UsersList;
