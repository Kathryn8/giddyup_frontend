// import { services } from '../data'
import Title from './Title'
import HowTo from './HowTo'
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import seahorse from '../assets/images/seahorseAtBeachFromAI.png'
import logo from '../assets/images/brandBannerLogo.png'


const howToList = [
  {
    id: 1,
    image: logo,
    imgDimension: 80,
    title: 'Step. : Sign up',
    text: "No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
  },
  {
    id: 2,
    image: logo,
    imgDimension: 80,
    title: 'Log into your dashboard',
    text: "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform.",
  },
  {
    id: 3,
    image: logo,
    imgDimension: 80,
    title: 'Scroll, click and go!',
    text: "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
  },
];

const HowToSection = () => {
  return (
    <Container sx={{ mb: 4 }}>
      <Typography variant='h3'> How to get galloping</Typography>
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
    </Container>
  )
}
export default HowToSection
