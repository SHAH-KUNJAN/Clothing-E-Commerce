import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
