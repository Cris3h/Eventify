import React, { useState } from "react";
import ModalNews from "./modals/ModalNews";
import ModalNewUser from "./modals/ModalNewUser";

const ModalStart: React.FC = () => {
  const [newUSer, setNewUser] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(true);

  const setModalState = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="">
      {newUSer 
      ? (<ModalNewUser modalState={showModal} setModalState={setModalState}/>) 
      : ( <ModalNews modalState={showModal} setModalState={setModalState}/>)}
    </div>
  );
};

export default ModalStart;
