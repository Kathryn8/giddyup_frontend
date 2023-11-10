import React from 'react'
import { Container, Typography, Box, Button, CardActions } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import img1 from '../assets/images/distance.png';
import img2 from '../assets/images/emissions.png';
import img3 from '../assets/images/savings.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const YourStats = ({ userId }) => {
  const [userObj, setUserObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  const url = process.env.REACT_APP_BASE_URL + '/users/654313801462530013767733';

  useEffect(() => {
    const getSingleUserProfile = async (userId) => {
      try {
        const resp = await axios.get(url, {
          headers: {
            Accept: 'application/json',
          },
        });
        console.log("checkpoint");
        const x = await setUserObj(resp.data.data);
        console.log("checkpoint");

        console.log(userObj);
      } catch (error) {
        setIsError(true);
        console.log(`error-2: ${error}`);

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
      title: `You have travelled ${userObj?.user?.userStats?.totalDistanceTravelled}km`,
      text: "This figure is based on extremely precise measurements that we have definitely calculated between drop-off and pick-up points",
    },
    {
      id: 2,
      image: img2,
      imgDimension: {
        xs: 80,
        md: 310,
      },
      title: `You have saved ${userObj?.user?.userStats?.emissionsSaved}kg of CO2`,
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
      title: `You have saved $${userObj?.user?.userStats?.dollarsSaved}`,
      text: "This figure is based upon the number of trips you've taken while sharing with  colleague compared to the cost of driving by yourself",
    },
  ];

  return (
    <Container sx={{ my: 10 }}>
      <Typography variant='h4' align='center'> Your statistics</Typography>
      <Typography sx = {{color: 'grey' }}variant='h6' align='center'> Since joining GiddyUP</Typography>

      <Box sx={{
        pt: 4,
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {statsList.map((item) => {
          return (
            <ActionAreaCard {...item} key={item.id} />
          )
        })}
      </Box>
    </Container>
  )
}

export default YourStats