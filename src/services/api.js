import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // substitua pela URL do back-end se estiver em outra porta ou servidor
});

export default api;