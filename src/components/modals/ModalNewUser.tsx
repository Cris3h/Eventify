import React from 'react';
import { ModalProps } from '@/types';

const ModalNewUser: React.FC<ModalProps> = ({ modalState, setModalState }) => {
  console.log(modalState)


  return (
    <>
    {
      modalState && 
      (

      <div>
        <button onClick={setModalState}>X</button>
        modal new user
      </div>

      ) 
    }
    </>
  )
}

export default ModalNewUser