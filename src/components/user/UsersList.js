import React from "react";
import useUsersList from "../../hooks/useUsersList";

const UsersTable = () => {
  const [list] = useUsersList();

  return list.map((user) => (
    <tbody key={user.id}>
      <tr>
        <td className="text-capitalize">
          {user.name.lastname} {user.name.firstname}
        </td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    </tbody>
  ));
};

export default UsersTable;
