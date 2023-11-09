import React from 'react'
import { Box, Typography } from '@mui/material';
import BookedTripCard from './BookedTripCard';
import { useEffect, useState } from 'react';
import authFetch from '../axios/interceptors';

const UpcomingTrips = ({ userId }) => {
  const [bookedTrips, setBookedTrips] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = '/trips/booked-trips'

  useEffect(() => {
    const getUpcomingTripsByUser = async (e) => {
      try {
        const resp = await authFetch.get(url, {
          params: {
            "passenger": userId,
          },
        });
        setBookedTrips(resp.data.data.trips)
      } catch (error) {
        console.log(`my error::: ${error.response}`);
      } finally {
        setIsLoading(false);
      }
    }
    getUpcomingTripsByUser()
  }, [userId]);

  return (
    <Box sx={{ my: 3 }}>
      {!(isLoading) && <Typography variant='h2' sx={{ mb: 3 }}>Your upcoming booked trips:</Typography>}
      {
        isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box>
            {bookedTrips.length === 0 ? (
              <Typography sx={{ color: 'grey' }} variant='h6'>You currently have no upcoming trips</Typography>
            ) : (
              bookedTrips.map((trip, index) => (
                <BookedTripCard key={index} trip={trip} userId={userId} />
              ))
            )}
          </Box>
        )
      }
    </Box >
  )
}

export default UpcomingTrips;
