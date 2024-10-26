import React from 'react';
import api from '../services/api';

const DeleteBL = ({ id }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/bl/${id}`);
      console.log('BL deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar BL:', error);
    }
  };

  return <button onClick={handleDelete}>Deletar BL</button>;
};

export default DeleteBL;
