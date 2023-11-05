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
              Celebrate diversity
            </Typography>
            <Typography variant="subtitle1">
              50% of carpoolers find their travel peers more diverse than their usual social circles, opening them up to new networks, cultures and opinions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSection1;
