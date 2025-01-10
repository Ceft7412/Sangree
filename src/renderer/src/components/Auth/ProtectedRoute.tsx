import React from 'react';
import { Navigate } from 'react-router-dom';

// types for the props
interface ProtectedRouteProps {
  element: React.ElementType;
  isAuthenticated: boolean;
  role?: string;
  requiredRole?: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Element,
  isAuthenticated,
  role,
  requiredRole
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <Element />;
};

export default ProtectedRoute;
