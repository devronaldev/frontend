import React, { useEffect, useState } from 'react';
import api from '../../services/api'; // Certifique-se de que o caminho está correto

const ContainerList = () => {
  const [containers, setContainers] = useState([]);

  const loadContainers = async () => {
    try {
      const response = await api.get('/containers'); // Usando a rota correta
      setContainers(response.data);
    } catch (error) {
      console.error('Erro ao carregar containers:', error); // Log do erro
    }
  };

  useEffect(() => {
    loadContainers();
  }, []);

  return (
    <div>
      <h2>Lista de Containers</h2>
      <ul>
        {containers.map(container => (
          <li key={container.id}>{container.nome}</li> // Altere para o campo correto
        ))}
      </ul>
    </div>
  );
};

export default ContainerList;
