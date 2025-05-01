import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage'; 
import OrderPage from "./OrderPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/siparis" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;

