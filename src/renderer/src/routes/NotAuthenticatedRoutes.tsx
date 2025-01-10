import React from 'react';
import { Navigate } from 'react-router-dom';

interface NotAuthenticatedRouteProps {
  element: React.ElementType;
  isAuthenticated: boolean;
  role?: string;
}

const NotAuthenticatedRoute: React.FC<NotAuthenticatedRouteProps> = ({
  element: Element,
  isAuthenticated,
  role
}) => {
  // Define role-based redirect logic
  const getRedirectPath = () => {
    switch (role) {
      case 'admin':
        return '/admin/dashboard';
      case 'staff':
        return '/staff/inventory';
      default:
        return '/'; // Default dashboard
    }
  };

  return isAuthenticated ? <Navigate to={getRedirectPath()} /> : <Element />;
};

export default NotAuthenticatedRoute;
