import React from 'react';
import { ThemeProvider } from '@mui/material';
import muiTheme from '../muiTheme';
import { Outlet, useNavigation } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import NewFooter from '../components/NewFooter';

const Layout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
    <ThemeProvider theme={muiTheme}>
      <ResponsiveAppBar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      <NewFooter />
      </ThemeProvider>
    </>
  );
};
export default Layout;
