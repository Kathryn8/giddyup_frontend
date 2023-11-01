import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import muiTheme from '../muiTheme';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';

const Layout = () => {

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <ResponsiveAppBar />

        <Outlet />

        <Footer />
      </ThemeProvider>
    </>
  );
};
export default Layout;
