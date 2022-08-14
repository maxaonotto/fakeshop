import { useState } from "react";

export default function useOpenModal() {
  const [openModal, setOpenModal] = useState({
    isLogin: false,
    isRegister: false,
  });

  return [openModal, setOpenModal];
}
