import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Management from './AdminComponents/Management';
import AdminRoute from './AdminRoute'; 

function App() {
  return (
    <div className="App">
      <Routes>
       
        <AdminRoute path="/management" element={<Management />} />
       
        <Route path="/" element={<SomePublicComponent />} />
      </Routes>
    </div>
  );
}

export default App;
