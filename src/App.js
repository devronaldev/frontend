import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContainersPage from './pages/ContainersPage';
import BLsPage from './pages/BLsPage';
import NotFound from './components/NotFound';
import ContainerForm from './components/Container/ContainerForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/containers" element={<ContainersPage />} />
        <Route path="/containers/new" element={<ContainerForm />} />
        <Route path="/bls" element={<BLsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
