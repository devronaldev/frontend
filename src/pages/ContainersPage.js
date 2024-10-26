import React from 'react';
import { Link } from 'react-router-dom';
import ContainerList from '../components/Container/ContainerList';

function ContainersPage() {
  return (
    <div>
      <h2>Containers</h2>
      <Link to="/containers/new">Adicionar Novo Container</Link>
      <ContainerList />
    </div>
  );
}

export default ContainersPage;
