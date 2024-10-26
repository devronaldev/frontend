import React, { useState } from 'react';
import api from '../../services/api';

const CreateBL = () => {
  const [formData, setFormData] = useState({
    numero: '',
    consignee: '',
    navio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/bl', formData);
      console.log('BL criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar BL:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Número:
        <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
      </label>
      <label>
        Consignee:
        <input type="text" name="consignee" value={formData.consignee} onChange={handleChange} />
      </label>
      <label>
        Navio:
        <input type="text" name="navio" value={formData.navio} onChange={handleChange} />
      </label>
      <button type="submit">Criar BL</button>
    </form>
  );
};

export default CreateBL;
