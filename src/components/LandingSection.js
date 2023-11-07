import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import benefit0 from '../assets/images/benefit0.png';

const LandingSection = () => {
  return (
    // This Box will give the background color that extends to the full width
    <Box sx={{ bgcolor: 'white', color: 'black' }}>
      {/* The Container centers the content and applies max width restrictions */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ textTransform: 'none' }}>
              Doing your bit
            </Typography>
            <Typography variant="subtitle1">
              Increase car occupancy rates while reducing CO2 emissions. Carpooling enables the transport of two times the number of passengers in cars, whilst reducing CO2 emissions by 29%.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={benefit0} alt="Step 1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>


  );
};

export default LandingSection;
