import React from 'react'
import { Container, Typography, Box, Button, CardActions, CircularProgress, Grid } from '@mui/material';
import StatsCard from './StatsCard';
import img1 from '../assets/images/distance.png';
import img2 from '../assets/images/emissions.png';
import img3 from '../assets/images/savings.png';
import { useEffect, useState } from 'react';
import ServerError from '../pages/ServerError';
import authFetch from '../axios/interceptors';
import SolariDisplay from './SolariDisplay';


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

  // cast my database variables into strings so they can safely pass to the Solari component:
  const distance = String(userObj?.user?.userStats?.totalDistanceTravelled);
  const co2 = String(userObj?.user?.userStats?.emissionsSaved);
  const dollars = String(userObj?.user?.userStats?.dollarsSaved);

  const statsList = [
    {
      id: 1,
      image: img1,
      imgDimension: {
        xs: 80,
        md: 310,
      },
      title: (
        <React.Fragment>
          travelled<Typography component="span" sx={{ verticalAlign: 'sub', fontSize: '0.75em', color: 'white', fontFamily: 'inherit' }} note='This typography component is here as a short cut to not have to format the text height of this card. The reason there is a descrepency in the height of my userStat cards is that for the carbon emmissions card we do some funky styling to display the 2 in the CO2 and so that is why here we need to display (in white) a full stop with the same styling so that everything aligns'>
            .
          </Typography>
          <Grid container spacing={1} alignItems="center" sx={{ py: 3 }}>
            <Grid item xs={8} md={12} lg={8}>
              <SolariDisplay text={distance} length={6} />
            </Grid>
            <Grid item xs={4} md={12} lg={4}>
              <SolariDisplay text={'kms'} length={3} />
            </Grid>
          </Grid>
        </React.Fragment>
      ),
      text: `This is the total number of kilometers you have travelled using GiddyUP`,
    },
    {
      id: 2,
      image: img2,
      imgDimension: {
        xs: 80,
        md: 310,
      },
      title: (
        <React.Fragment>
          reduced CO<Typography component="span" sx={{ verticalAlign: 'sub', fontSize: '0.75em', color: 'inherit', fontFamily: 'inherit' }} >
            2
          </Typography> by
          <Grid container spacing={1} alignItems="center" sx={{ py: 3 }}>
            <Grid item xs={8} md={12} lg={8}>
              <SolariDisplay text={co2} length={6} />
            </Grid>
            <Grid item xs={4} md={12} lg={4}>
              <SolariDisplay text={'kgs'} length={3} />
            </Grid>
          </Grid>
        </React.Fragment>
      ),
      text: "This is the total amount of carbon dioxide you prevented from entering the atmosphere because you chose to ride with a colleague.",
    },
    {
      id: 3,
      image: img3,
      imgDimension:
      {
        xs: 80,
        md: 310,
      },
      title: (
        <React.Fragment>
          saved<Typography component="span" sx={{ verticalAlign: 'sub', fontSize: '0.75em', color: 'white', fontFamily: 'inherit' }} note='This typography component is here as a short cut to not have to format the text height of this card. The reason there is a descrepency in the height of my userStat cards is that for the carbon emmissions card we do some funky styling to display the 2 in the CO2 and so that is why here we need to display (in white) a full stop with the same styling so that everything aligns'>
            .
          </Typography>
          <Grid container spacing={1} alignItems="center" sx={{ py: 3 }}>
            <Grid item xs={2} md={12} lg={2}>
              <SolariDisplay text={'$'} length={1} />
            </Grid>
            <Grid item xs={10} md={12} lg={10}>
              <SolariDisplay text={dollars} length={8} />
            </Grid>
          </Grid>
        </React.Fragment>
      )
      ,
      text: "This figure is based upon the distance you have travelled while sharing a ride with colleague compared to the cost of driving by yourself",
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
    <Container sx={{ my: 5 }}>
      <Typography variant='h3'> Since joining GiddyUP you have</Typography>

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