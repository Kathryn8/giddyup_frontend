import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import CombinedFooter from '../components/CombinedFooter';

const Layout = () => {

  return (
    <>
      <NavBar position="fixed" />
      <Outlet />
      <CombinedFooter />
    </>
  );
};
export default Layout;
