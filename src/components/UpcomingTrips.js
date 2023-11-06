import React from 'react'
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import BookedTripCard from './BookedTripCard';
import { useEffect, useState } from 'react';

const UpcomingTrips = ({ userId }) => {
  const [bookedTrips, setBookedTrips] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const url = process.env.REACT_APP_BASE_URL + '/trips/booked-trips'

  useEffect(() => {
    const getUpcomingTripsByUser = async (e) => {
      // e.preventDefault();
      try {
        const resp = await axios.get(url, {
          headers: {
            Accept: 'application/json',
          },
          params: {
            "passenger": userId,
          },
        });
        setBookedTrips(resp.data.data.trips)
        console.log(`response::: ${resp.data.data.trips}`)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(`my error::: ${error.response}`);
      }
    }
    getUpcomingTripsByUser()
  }, [userId]);
  // console.log(`bookedTrips.results: ${bookedTrips.data.results}`) // number of trips returned
  // console.log(`bookedTrips.data.data.trips: ${bookedTrips.data.data.trips}`) // list of trips booked
  // if (trips.data.results === 0) {
  //   return (
  //     <Typography>You currently have {trips.data.results} upcoming trips</Typography>
  //   )
  // }

  return (
    <Box sx={{ my: 3 }}>
      {!(isLoading) && <Typography variant='h3' sx={{ mb: 3 }}>Your upcoming booked trips:</Typography>}
      {
        isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box>
            {bookedTrips.length === 0 ? (
              <Typography variant='h5'>You currently have no upcoming trips</Typography>
            ) : (
              bookedTrips.map((trip, index) => (
                <BookedTripCard key={index} trip={trip} userId={userId} />
              ))
            )}
          </Box>
        )
      }
      {/* {bookedTrips.data.results && <Typography>You currently have {bookedTrips.data.results} upcoming trips</Typography>} */}

      {/* {bookedTrips.data.results > 0 ? <h5>trips exist </h5> : <h5>NO trips</h5>} */}
      {/* <BookedTripCard /> */}
      {/* {bookedTrips && bookedTrips.data.trips.map((trip, index) => (
        <BookedTripCard key={index} trip={trip} userId={userId} />
      ))} */}
      {/* <Button onClick={getUpcomingTripsByUser} variant='contained'>
        Display data here */}
      {/* </Button> */}
    </Box >
  )
}

export default UpcomingTrips;
