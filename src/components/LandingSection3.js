import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import benefit3 from '../assets/images/emissions1.png';

const LandingSection3 = () => {
  return (
    <Box sx={{ bgcolor: '#dff3e3', color: 'black' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 4 }}>
          <Grid item xs={12} sm={6}>
            <img src={benefit3} alt="Step 1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ textTransform: 'none' }}>
              Massive emissions savings
            </Typography>
            <Typography variant="subtitle1">
              The average daily commute in Australia is 26 km which produces approximately 4.78 kg of CO<Box component="span" sx={{ typography: 'body1', verticalAlign: 'sub' }}>2</Box>. If your company can get 75 employees to carpool daily, that's 7.89 tonnes of CO<Box component="span" sx={{ typography: 'body1', verticalAlign: 'sub' }}>2</Box> saved in a month!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSection3;
