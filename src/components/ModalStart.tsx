import React, { useState } from "react";
import ModalNews from "./modals/ModalNews";
import ModalNewUser from "./modals/ModalNewUser";

interface ModalStartProps {
  modalState: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalStart: React.FC<ModalStartProps> = ({
  modalState,
  setShowModal,
}) => {
  const [newUSer, setNewUser] = useState<Boolean>(true);
  // const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalState = () => {
    setShowModal(!modalState);
  };

  return (
    // <div className="">
    //   {newUSer
    //   ? (<ModalNewUser modalState={modalState} handleModalState={handleModalState}/>)
    //   : ( <ModalNews modalState={modalState} handleModalState={handleModalState}/>)}
    // </div>

    <div className="min-h-screen flex items-center justify-center sm:p-8 ">
      <div className="bg-orange-500 shadow-md border rounded-xl p-2 max-w-md h-2/4 w-450px">
        <div className="w-full flex flex-row justify-end">
          <button onClick={handleModalState}>X</button>
        </div>
        {newUSer ? (
          <ModalNewUser
            modalState={modalState}
            handleModalState={handleModalState}
          />
        ) : (
          <ModalNews
            modalState={modalState}
            handleModalState={handleModalState}
          />
        )}
      </div>
    </div>
  );
};

export default ModalStart;
