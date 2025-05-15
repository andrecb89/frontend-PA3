import React, { useState } from 'react';
import './styles.css';
import Sidebar from './Sidebar';

function CadastroLocal() {
  const [formData, setFormData] = useState({
    sala: '',
    armario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const localArmazen = {
      sala: formData.sala,
      armario: formData.armario
    };

    try {
      const response = await fetch('http://localhost:8080/localarmazen/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(localArmazen)
      });

      const data = await response.json();
      console.log('Sucesso:', data);
      setFormData({ sala: '', armario: '' });
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
   <div className="div-container gradient-background min-h-screen flex">
  <Sidebar />
  <div className="flex-1 flex justify-center items-start mt-20">
    <div className="w-1/2">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Cadastro de Local</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sala">Sala:</label>
          <input
            type="text"
            id="sala"
            name="sala"
            required
            value={formData.sala}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="armario">Armário:</label>
          <input
            type="text"
            id="armario"
            name="armario"
            required
            value={formData.armario}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</div>

  );
}

export default CadastroLocal;
