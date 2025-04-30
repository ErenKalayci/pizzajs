import React from 'react';
import './App.css'; // CSS dosyasını içeri aktar
import Header from './Header';
import CategoryMenu from './CategoryMenu';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <CategoryMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

