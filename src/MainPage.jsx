import React from 'react';
import Header from './Header';
import CategoryMenu from './CategoryMenu';
import MainContent from './MainContent';

import './App.css'; 
function MainPage() {
  return (
    <div>
      <Header />
      <CategoryMenu />
      <MainContent />
     
    </div>
  );
}

export default MainPage;
