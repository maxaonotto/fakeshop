import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState({
    isLogin: false,
    isRegister: false,
  });

  return [modal, setModal];
}
