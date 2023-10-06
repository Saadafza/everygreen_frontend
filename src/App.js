import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Management from './AdminComponents/Mangement';
import AdminRoute from './AdminRoute'; 
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Use <Route> for admin-only routes, not <AdminRoute> */}
        <Route path="/management" element={<AdminRoute element={<Management />} />} />
       
        {/* Other public routes */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
