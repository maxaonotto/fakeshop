import { useState } from "react";

export default function useAuthModal() {
  const [modal, setModal] = useState({
    isLogin: false,
    isRegister: false,
  });

  return [modal, setModal];
}
