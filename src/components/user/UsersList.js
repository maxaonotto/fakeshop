import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUsersList from "../../hooks/useUsersList";
import { useDispatch } from "react-redux";
import { handleDeleteUser } from "../../redux/action";

const UsersList = () => {
  const dispatch = useDispatch();
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
            <Link to={`/user/id=${user.id}`} style={{ color: "black" }}>
              <FontAwesomeIcon className="p-1 me-1" size="xl" icon={faPen} />
            </Link>
            <FontAwesomeIcon
              onClick={() => handleDeleteUser(dispatch, user.id)}
              as={Button}
              className="p-1 cursor-pointer"
              size="xl"
              icon={faTrash}
            />
          </td>
        </tr>
      </tbody>
    ))
  );
};

export default UsersList;
