import React from 'react';
import { ThemeProvider } from '@mui/material';
import muiTheme from '../muiTheme';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <NavBar />

        <Outlet />

        <Footer />
      </ThemeProvider>
    </>
  );
};
export default Layout;
