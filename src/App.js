import React from 'react';
import { Layout, LandingPage, Error, UserDashboard, UserProfile } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<LandingPage />} />
          <Route path='dashboard' element={<UserDashboard />} />
          <Route path='userprofile' element={<UserProfile />} />
          {/* <Route path='login' element={<Login />} /> */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
