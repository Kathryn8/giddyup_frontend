import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import benefit2 from '../assets/images/benefit2.png';

const LandingSection = () => {
  return (
    // This Box will give the background color that extends to the full width
    <Box sx={{ bgcolor: 'white', color: 'black' }}>
      {/* The Container centers the content and applies max width restrictions */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ textTransform: 'none' }}>
              A congestion busting solution
            </Typography>
            <Typography variant="subtitle1">
              A 5% reduction in the number of cars on the road can lead to a 10 - 30% reduction in delays due to congestion. Removing 75 cars from daily traffic, each averaging 60 km/h, opens up almost 5 km of road!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={benefit2} alt="Step 1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>


  );
};

export default LandingSection;
