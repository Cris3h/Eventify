import React, { useState } from "react";
import ModalStart from "@/components/ModalStart";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

const User = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  // console.log(showSidebar)
  // console.log(showModal)

  const overlay = `absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../images/types/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')]`;

  return (
    <>
      <div className="relative h-screen">
        
        <div className="absolute top-0 left-0 w-full h-full">
          <Dashboard />
        </div>

        {showModal && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] opacity-35"></div>

            <div className="relative w-full h-full flex z-10">
              <div className="flex flex-col h-full w-full items-center justify-center">
                <ModalStart
                  modalState={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default User;
