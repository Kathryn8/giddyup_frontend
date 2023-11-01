import React from 'react';
import MyImage from '../assets/images/icon.png';
import { Container, Box } from "@mui/material";


const Hero = () => {
  return (
    <Container sx={{ p: 4 }}>

      <Box
        sx={{
          backgroundImage: `url(${MyImage})`,
          backgroundSize: '20%',
          backgroundPosition: 'center',
          height: '200px',
          color: 'white',
          backgroundRepeat: 'repeat-x',
        }}
      >
      </Box >
      <h1>Landing Page</h1>

    </Container>
  )
}
export default Hero
