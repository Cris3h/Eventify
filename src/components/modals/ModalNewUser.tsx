import React, { useState } from "react";
import { ModalProps } from "@/types";
import FormComponent from "../FormNewUser";

const ModalNewUser: React.FC<ModalProps> = ({ modalState }) => {

  return (
    <>
      {modalState && (
        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl mb-6 text-white">
           Eventify!
          </h2>
          <div className=" bg-orange-100 border rounded-md justify-center align-center h-72 p-4 overflow-y-scroll scrollbar-custom">
            <FormComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNewUser;
