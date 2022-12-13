import React from 'react';
import { Navigate } from 'react-router-dom';
import { userHook } from '../context/userData';


const PrivateRoute = ({ children }) => {
  const { userData } = userHook();
  
  return userData.token ? children : <Navigate to='/' />;
}

export default PrivateRoute;