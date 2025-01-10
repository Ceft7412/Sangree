import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Inventory, Supplier } from '../pages/index';
import ProtectedRoute from '@renderer/components/Auth/ProtectedRoute';

import { RoutesProps } from '../../src/types/route';

// This function holds the route for inventory and supplier modules.
export const StaffRoutes: React.FC<RoutesProps> = ({ isAuthenticated, role }) => {
  return (
    <>
      <Routes>
        <Route
          path="inventory"
          element={
            <ProtectedRoute
              element={Inventory}
              isAuthenticated={isAuthenticated}
              role={role}
              requiredRole="staff"
            />
          }
        />
        <Route path="staff/supplier" element={<Supplier />} />
      </Routes>
    </>
  );
};
