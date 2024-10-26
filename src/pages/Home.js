// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Containers</h1>
      <Link to="/containers">Ver Containers</Link>
    </div>
  );
}

export default Home;
