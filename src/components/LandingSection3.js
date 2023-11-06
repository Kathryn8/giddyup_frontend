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
            <Typography variant="h4" gutterBottom>
              Monthly CO2 savings - 7.89 tonnes
            </Typography>
            <Typography variant="subtitle1">
              The average commute in Melbourne is 26 km. CO2 saved for each carpool trip = 4.78 kg CO2. For 75 daily trips, CO2 saved = 75 x 4.78 kg = 358.5 kg CO2/day. Monthly CO2 saved (assuming 22 working days a month) = 22 x 358.5 kg = 7,887 kg CO2 or 7.89 tonnes CO2.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSection1;
