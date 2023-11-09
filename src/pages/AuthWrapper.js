import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress, Typography } from '@mui/material';

function AuthWrapper({ children }) {

  const { isLoading, error } = useAuth0();

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '55vh'
  }

  if (isLoading) {
    return (
      <Box sx={styles}>
        <Typography variant="h2">Loading...</Typography>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={styles}>
        <Typography>{error.message}</Typography>
      </Box>
    );
  }

  return <>{children}</>;
}

export default AuthWrapper;