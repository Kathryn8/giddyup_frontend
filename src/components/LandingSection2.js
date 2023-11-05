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
            <Typography variant="h4" gutterBottom>
              Meaningful conversations
            </Typography>
            <Typography variant="subtitle1">
              Share enriching experiences on the go. 87% of carpoolers have had enlightening exchanges during their rides either by gaining knowledge, lending a sympathetic ear and sharing life experiences.
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
