import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    country: '',
    eventType: '',
    eventName: '',
    group: [],
    newParticipant: {
      name: '',
      lastName: '',
      country: '',
    }
  });

  console.log( typeof formData.group, formData.group)

  // Manejar cambios en los inputs individuales
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar cambios en los inputs del participante nuevo
  const handleNewParticipantChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      newParticipant: {
        ...formData.newParticipant,
        [name]: value
      }
    });
  };

  

  // Función para manejar el envío del formulario
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); // Aquí puedes hacer lo que quieras con los datos del formulario
  };

  return (

    <div className="flex items-center justify-center h-fit">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Answer this quick questionnaire</h2>

      {/* Campo Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      {/* Campo Last Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter your last name"
        />
      </div>

      {/* Campo Country */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter your country"
        />
      </div>

      {/* Campo Event Type */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
        <input
          type="text"
          name="eventType"
          value={formData.eventType}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter event type"
        />
      </div>

      {/* Campo Event Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter event name"
        />
      </div>

      {/* Campo Group */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Group</label>
        <input
          type="number"
          name="group"
          value={formData.group}
          onChange={handleInputChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter group number"
        />
      </div>

      <h2 className="text-lg font-bold mt-6 mb-2">New Participant:</h2>



{/*------------------------------------------------------------------------------------------------------------------- */}
      {/* Campo Name del nuevo participante */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.newParticipant.name}
          onChange={handleNewParticipantChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter new participant's name"
        />
      </div>

      {/* Campo Last Name del nuevo participante */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.newParticipant.lastName}
          onChange={handleNewParticipantChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter new participant's last name"
        />
      </div>

      {/* Campo Country del nuevo participante */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={formData.newParticipant.country}
          onChange={handleNewParticipantChange}
          className="border-2 border-gray-200 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter new participant's country"
        />
      </div>
{/*------------------------------------------------------------------------------------------------------------------- */}



      {/* Botón de Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
);

};

export default FormComponent;
