import React, { useState } from "react";
import { ModalProps } from "@/types";



const ModalNewUser: React.FC<ModalProps> = ({ modalState }) => {
  // console.log(modalState);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    country: "",
    eventType: "",
    eventName: "",
    group: 0,
    newParticipant: {
      name: '',
      lastName: '',
      country: '',
    }

  });


  const createNewPerson = (number: number) => {
    let peoples = [];
    for(let i = 0; i < number; i++){
      peoples.push(number + i)
    }
    return peoples
  }


  const handlesubmit = () => {
    console.log(formData);
  };

  return (
    <>
      {modalState && (
        <div className="">
          <h2 className="text-center text-2xl mb-6">
            Answer this quick questionnaire
          </h2>

          <div className=" bg-orange-200 border rounded-md justify-center align-center h-72 p-4 overflow-y-scroll scrollbar-custom">
            <form action="submit" onSubmit={handlesubmit}>
              <p>asd</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNewUser;
