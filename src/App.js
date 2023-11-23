import React from 'react';
import { Layout, LandingPage, Error, UserDashboard, UserProfile, DriverProfile, PrivateRoute, AuthWrapper } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<LandingPage />} />
            <Route path='dashboard' element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
            <Route path='userprofile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path='driverprofile' element={<PrivateRoute><DriverProfile /></PrivateRoute>} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  );
};
export default App;
