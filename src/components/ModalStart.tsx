import React, { useState } from "react";
import { ModalStartProps } from "@/types";
import ModalNews from "./modals/ModalNews";
import ModalNewUser from "./modals/ModalNewUser";

const ModalStart: React.FC<ModalStartProps> = ({ modalState, setShowModal }) => {
  const [newUser, setNewUser] = useState<Boolean>(false);

  const handleModalState = () => {
    setShowModal(!modalState);
  };

  return (
    <>
      {modalState && (
        <div className="min-h-screen flex items-center justify-center sm:p-8">
          <div className="bg-orange-500 shadow-md border rounded-xl p-2 w-72 max-w-md sm:h-3/4 md:h-auto">
            <div className="w-full flex flex-row justify-end">
              <button onClick={handleModalState}>X</button>
            </div>

            {newUser ? (
              <ModalNewUser
                modalState={modalState}
                setShowModal={handleModalState}
              />
            ) : (
              <ModalNews
                modalState={modalState}
                setShowModal={handleModalState}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalStart;
