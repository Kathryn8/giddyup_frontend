import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import benefit3 from '../assets/images/benefit3.png';

const LandingSection1 = () => {
  return (
    <Box sx={{ bgcolor: 'rgba(242, 193, 51, 0.5)', color: 'black' }}>
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
              The average daily commute in Melbourne is 26 km. The emissions saved for each carpool trip is apprximately 4.78 kg of CO2. If your company can get 75 employees to carpool daily that's 7.89 tonnes CO2 saved in a month!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSection1;
