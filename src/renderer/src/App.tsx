import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { StaffRoutes, AdminRoutes } from './routes/index';
import { Login } from './pages/index';
import NotAuthenticatedRoute from './routes/NotAuthenticatedRoutes';
import { Unathorized } from './components/Auth/Unathorized';
function App(): JSX.Element {
  const isAuthenticated = false; // Replace with real auth logic
  const role = 'staff'; // Replace with real role logic
  return (
    <>
      {/* Wrap the route in an auth provider */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NotAuthenticatedRoute
                element={Login}
                isAuthenticated={isAuthenticated}
                role={role}
              />
            }
          />

          <Route
            path="/*"
            element={<AdminRoutes isAuthenticated={isAuthenticated} role={role} />}
          />

          <Route
            path="/staff/*"
            element={<StaffRoutes isAuthenticated={isAuthenticated} role={role} />}
          />

          <Route path="/unauthorized" element={<Unathorized />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
