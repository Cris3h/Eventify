import React from "react";
import ModalStart from "@/components/ModalStart";

const dashboard = () => {
  
  return (
    <>
      <div className="relative h-screen">

        <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] opacity-35 bg-cover bg-no-repeat bg-center bg-[url('../images/types/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')]">

          {/* aca va el dashboard */}

        </div>

        <div className="relative w-full h-full flex z-10">
          
          <div className="flex flex-col h-full w-full items-center justify-center p-60">
            <ModalStart />
          </div>
          
        </div>

      </div>
    </>

  );
};

export default dashboard;
