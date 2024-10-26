import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

function ContainerForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ numero: '', tamanho: '', tipo: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (id) {
      loadContainer();
    }
  }, [id]);

  const loadContainer = async () => {
    try {
      const response = await api.get(`/containers/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Erro ao carregar o container:', error);
      setErrorMessage('Erro ao carregar o container. Tente novamente.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Resetando a mensagem de erro
    setSuccessMessage(''); // Resetando a mensagem de sucesso

    try {
      if (id) {
        await api.put(`/containers/${id}`, formData);
      } else {
        await api.post('/containers', formData);
      }
      setSuccessMessage('Container salvo com sucesso!');
      setTimeout(() => {
        navigate('/containers');
      }, 1500); // Redireciona após 1.5 segundos
    } catch (error) {
      console.error('Erro ao salvar o container:', error);
      setErrorMessage('Erro ao salvar o container. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Container' : 'Criar Container'}</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Mensagem de sucesso */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número:</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tamanho:</label>
          <input
            type="text"
            name="tamanho"
            value={formData.tamanho}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default ContainerForm;
