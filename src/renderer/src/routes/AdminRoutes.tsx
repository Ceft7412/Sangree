import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import { Dashboard } from '../pages/index';

// Types
import { RoutesProps } from '../../src/types/route';
import ProtectedRoute from '@renderer/components/Auth/ProtectedRoute';

export const AdminRoutes: React.FC<RoutesProps> = ({ isAuthenticated, role }) => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute
            element={Dashboard}
            isAuthenticated={isAuthenticated}
            role={role}
            requiredRole="admin"
          />
        }
      />
    </Routes>
  );
};
