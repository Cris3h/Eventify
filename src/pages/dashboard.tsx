import React, { useState } from "react";
import ModalStart from "@/components/ModalStart";


const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  console.log(showModal)

  const overlay = `absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../images/types/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')]`
  
  return (
    <>
      <div className="relative h-screen">

        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../images/types/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')]">

          {/* aca va el dashboard */}

        </div>

       { showModal && <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] opacity-35"></div>}

        <div className="relative w-full h-full flex z-10">
          
          <div className="flex flex-col h-full w-full items-center justify-center p-60">
            <ModalStart modalState={showModal} setShowModal={setShowModal} />
          </div>
          
        </div>

      </div>
    </>

  );
};

export default Dashboard;
