import SearchBar from "./SearchBar"
import React from 'react';
import MyImage from '../assets/images/hero3.jpg';
import { Container, Box, Typography, Button, useTheme } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';

const Hero = () => {
  const theme = useTheme(); // For accessing theme breakpoints

  // Authentication functions and state
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  const isUser = isAuthenticated;

  return (
    <Container maxWidth="false" id="hero-container-adrian">
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '60vh', xl: '80vh' },
        }}
      >
        <Typography variant="h1"
          sx={{
            position: 'absolute',
            top: { xs: '42%', md: '10%' }, // Adjust the top position to create space for the button below
            left: '10%',
            // transform: 'translate(-50%, -50%)',
            zIndex: 2,
            // fontSize: { xs: '1rem', sm: '1rem', md: '2rem' }, // Responsive font size
            fontWeight: 'light',
            color: 'white',
            opacity: .9,
            textAlign: 'left',
          }}
        >
          Making your daily drive <br></br>better together
        </Typography>

        {/* Conditionally render the login/logout button */}
        {isUser ? (
          <></>
        ) : (
          <Button
            onClick={loginWithRedirect}
            variant="contained"
            sx={{
              position: 'absolute',
              top: { xs: '80%', sm: '60%', md: '30%' },  // Position it below the typography
              left: '10%',
              // transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          >
            Get Started
          </Button>
        )}
      </Box>
    </Container >
  )
}

export default Hero;
