import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const ListBL = () => {
  const [bls, setBls] = useState([]);

  useEffect(() => {
    const fetchBls = async () => {
      try {
        const response = await api.get('/bl');
        setBls(response.data);
      } catch (error) {
        console.error('Erro ao buscar BLs:', error);
      }
    };
    fetchBls();
  }, []);

  return (
    <div>
      <h2>Lista de BLs</h2>
      <ul>
        {bls.map((bl) => (
          <li key={bl.id}>
            {bl.numero} - {bl.consignee} - {bl.navio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBL;
