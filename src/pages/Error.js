import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Box, Container, Typography } from '@mui/material';
import seahorses from '../assets/images/seahorseAtBeachFromAI.png';
import errorFont from '../assets/images/error404font.png';

const imgSx = {
  height: 300,
  width: 350,
  maxHeight: { xs: 150, md: 300 },
  maxWidth: { xs: 200, md: 350 },
  margin: 2
}

const Error = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 6
    }}>

      <Box
        component="img"
        sx={imgSx}
        alt="404 Error"
        src={errorFont}
      />
      <Typography variant='h3'>Ohh!</Typography>
      <Typography>We can't seem to find page you are looking for</Typography>

      <Box
        component="img"
        sx={imgSx}
        alt="Seahorses in a car at the beach"
        src={seahorses}
      />
      <Typography>"A link as broken as our AI-generated windshield!"</Typography>


      <Button variant='contained' sx={{ m: 1 }}><Link to='/'>back home</Link></Button>
    </Container>
  );
}

export default Error;

