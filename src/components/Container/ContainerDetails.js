import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';

function ContainerDetails() {
  const { id } = useParams();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    loadContainer();
  }, [id]);

  const loadContainer = async () => {
    const response = await api.get(`/containers/${id}`);
    setContainer(response.data);
  };

  if (!container) return <div>Carregando...</div>;

  return (
    <div>
      <h2>Detalhes do Container</h2>
      <p><strong>Número:</strong> {container.numero}</p>
      <p><strong>Tamanho:</strong> {container.tamanho}</p>
      <p><strong>Tipo:</strong> {container.tipo}</p>
    </div>
  );
}

export default ContainerDetails;
