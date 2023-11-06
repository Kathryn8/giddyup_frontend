import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import benefit1 from '../assets/images/benefit1.png';

const LandingSection1 = () => {
  return (
    <Box sx={{ bgcolor: 'rgba(242, 193, 51, 0.5)', color: 'black', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} sm={6}>
            <img src={benefit1} alt="Step 1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" sx={{ p: 1 }}>
              Save up to $60/month in fuel costs
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Share costs like petrol, insurance, and tolls. With Giddyup, experience the affordability of carpooling, especially crucial in times of rising expenses.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


export default LandingSection1;
