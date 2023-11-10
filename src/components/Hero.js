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
    logout,
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
          height: { xs: '200px', sm: '300px', md: '600px' }, // Adjusted height for mobile
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '10%', // Adjust the top position to create space for the button below
            left: '10%',
            // transform: 'translate(-50%, -50%)',
            zIndex: 2,
            fontSize: { xs: '1rem', sm: '1rem', md: '3rem' }, // Responsive font size
            fontWeight: 'bold',
            color: 'white',
            opacity: 1,
            // textAlign: 'center',
          }}
        >
          Making your daily drive better together
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
              top: { xs: '80%', sm: '35%', md: '35%' },  // Position it below the typography
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
