import React from 'react';
import ListBL from '../components/BL/ListBL';
import CreateBL from '../components/BL/CreateBL';

const BLsPage = () => {
  return (
    <div>
      <h1>BLs</h1>
      <CreateBL />
      <ListBL />
    </div>
  );
};

export default BLsPage;