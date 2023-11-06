// import { services } from '../data'
// import Title from './Title'
import React from 'react';
import { Container, Typography, Box, Button, CardActions } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import { useAuth0 } from '@auth0/auth0-react';




const howToList = [
  {
    id: 1,
    image: step1,
    imgDimension: 200,
    title: 'Sign up with your email and a password',
    text: "Follow the sign-up link. Get started with just your email and password",
  },
  {
    id: 2,
    image: step2,
    imgDimension: 200,
    title: 'Choose your trip and preferences',
    text: "Find the commute thats right for you, pick a route and driver. You will get a get idea of your trip-mate before you book",
  },
  {
    id: 3,
    image: step3,
    imgDimension: 200,
    title: 'Book your ride with a trusted driver. GiddyUP!',
    text: "Getting to work has never been easier! Book a trip with a trusted workmate",
  },
];

const HowToSection = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const isUser = isAuthenticated;

  return (
    <Container sx={{ my: 10 }}>
      <Typography variant='h4' align='center'> How to get galloping</Typography>
      <Box sx={{
        pt: 4,
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {howToList.map((item) => {
          return (
            <ActionAreaCard {...item} key={item.id} />
          )
        })}
      </Box>

      {/* Conditionally render the login/logout button */}
      {isUser ? (
        <></>
      ) : (
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={loginWithRedirect}
            variant="contained"
            sx={{
              m: 4,
              p: 2
            }}
          >
            Get started now
          </Button>
        </CardActions>
      )}

    </Container>
  )
}
export default HowToSection
