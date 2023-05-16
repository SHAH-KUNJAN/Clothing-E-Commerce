import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS Page</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
