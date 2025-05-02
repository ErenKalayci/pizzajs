import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage'; 
import OrderPage from "./OrderPage"
import OrderConfirmationPage from './OrderConfirmationPage';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/siparis" element={<OrderPage />} />
        <Route path="/onay" element={<OrderConfirmationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

