import { useState } from "react";

function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true)
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  return [isOpenModal, openModal, closeModal]
}

export { useModal }