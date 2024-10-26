import React, { useState, useEffect } from 'react';
import api from '../services/api';

const EditBL = ({ match }) => {
  const [formData, setFormData] = useState({
    numero: '',
    consignee: '',
    navio: '',
  });

  useEffect(() => {
    const fetchBL = async () => {
      try {
        const response = await api.get(`/bl/${match.params.id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar BL:', error);
      }
    };
    fetchBL();
  }, [match.params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/bl/${match.params.id}`, formData);
      console.log('BL atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar BL:', error);
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
      <button type="submit">Atualizar BL</button>
    </form>
  );
};

export default EditBL;
