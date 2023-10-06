// AdminRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const AdminRoute = ({ element }) => {
  const userContext = useContext(AuthContext);

  if (userContext.user?.role === 'Admin') {
    return <Route element={element} />;
  } else {
    // Redirect to some unauthorized page 
    return <Navigate to="/unauthorized" />;
  }
};

export default AdminRoute;
