import React from 'react';
import { ThemeProvider } from '@mui/material';
import muiTheme from '../muiTheme';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import NewFooter from '../components/NewFooter';

const Layout = () => {

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <ResponsiveAppBar />

        <Outlet />

        <NewFooter />
      </ThemeProvider>
    </>
  );
};
export default Layout;
