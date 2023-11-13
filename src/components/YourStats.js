import React from 'react'
import { Container, Typography, Box, Button, CardActions, CircularProgress } from '@mui/material';
import StatsCard from './StatsCard';
import img1 from '../assets/images/distance.png';
import img2 from '../assets/images/emissions.png';
import img3 from '../assets/images/savings.png';
import { useEffect, useState } from 'react';
import ServerError from '../pages/ServerError';
import authFetch from '../axios/interceptors';

const YourStats = ({ userId }) => {
  const [userObj, setUserObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  const url = '/users/' + userId;

  useEffect(() => {
    const getSingleUserProfile = async () => {
      try {
        const resp = await authFetch.get(url);
        setUserObj(resp.data.data);
      } catch (error) {
        setIsError(true);
        console.log(`error`);
      } finally {
        setIsLoading(false);
      }
    };
    getSingleUserProfile()
  }, [userId]);

  const statsList = [
    {
      id: 1,
      image: img1,
      imgDimension: {
        xs: 80,
        md: 310,
      },
      title: `Travelled: ${userObj?.user?.userStats?.totalDistanceTravelled}km`,
      text: "This figure is based on extremely precise measurements that we have definitely calculated between drop-off and pick-up points",
    },
    {
      id: 2,
      image: img2,
      imgDimension: {
        xs: 80,
        md: 310,
      },
      title: `Reduced: ${userObj?.user?.userStats?.emissionsSaved}kg of CO2`,
      text: "This figure is based upon the number of trips you've taken while sharing with  colleague compared to the cost of driving by yourself. We have used the average emission level of the average car on Melbourne roads.",
    },
    {
      id: 3,
      image: img3,
      imgDimension:
      {
        xs: 80,
        md: 310,
      },
      title: `Saved: $${userObj?.user?.userStats?.dollarsSaved}`,
      text: "This figure is based upon the number of trips you've taken while sharing with  colleague compared to the cost of driving by yourself",
    },
  ];

  if (isLoading) {
    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '55vh' }}>
          <Typography variant="h2">Loading...</Typography>
          <CircularProgress color="secondary" />
        </Box>
      </>
    )
  }

  if (isError) {
    return (
      <ServerError />
    )
  }

  return (
    <Container sx={{ my: 10 }}>
      <Typography sx={{ color: 'grey' }} variant='h4' align='center'> Since joining GiddyUP you have:</Typography>

      <Box sx={{
        pt: 4,
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {statsList.map((item) => {
          return (
            <StatsCard {...item} key={item.id} />
          )
        })}
      </Box>
    </Container>
  )
}

export default YourStats