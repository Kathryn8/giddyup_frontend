import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import benefit0 from '../assets/images/safety.png';

const LandingSection = () => {
  return (
    // This Box will give the background color that extends to the full width
    <Box sx={{ bgcolor: 'white', color: 'black' }}>
      {/* The Container centers the content and applies max width restrictions */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ textTransform: 'none' }}>
              Safety
            </Typography>
            <Typography variant="subtitle1">
              22% of Giddyup drivers reduce their speed when carpooling. 35% of drivers check their tire pressure more often. Both these actions also reduce emissions. Fewer cars on the road means a lower likelihood of accidents.
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
