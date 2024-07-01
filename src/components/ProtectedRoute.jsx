import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ roles }) => {
  const currentUser = authService.getCurrentUser();

  if (!currentUser) {
    // No está conectado, redirigir al login
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(currentUser.roleId) === -1) {
    // Rol no autorizado, redirigir a la página principal
    return <Navigate to="/" />;
  }

  // Autorizado, retornar el componente deseado
  return <Outlet />;
};

export default ProtectedRoute;

