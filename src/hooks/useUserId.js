import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../service/getUsers";

export default function useUserId() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(userId, setUser);
  }, [userId]);

  return [user, setUser];
}
