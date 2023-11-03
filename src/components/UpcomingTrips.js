import React from 'react'
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import BookedTripCard from './BookedTripCard';


const UpcomingTrips = ({ userId }) => {
  const [bookedTrips, setBookedTrips] = React.useState('');
  const url = 'http://127.0.0.1:5000/api/v1/trips/booked-trips'


  const getUpcomingTripsByUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
        params: {
          "passenger": userId,
        },
      });
      setBookedTrips(resp)
      console.log(`response::: ${bookedTrips.data.data.trips}`)
    } catch (error) {
      console.log(`my error::: ${error.response}`);
    }
  }
  console.log(`bookedTrips.results: ${bookedTrips.data.results}`) // number of trips returned
  console.log(`bookedTrips.data.data.trips: ${bookedTrips.data.data.trips}`) // list of trips booked
  // if (trips.data.results === 0) {
  //   return (
  //     <Typography>You currently have {trips.data.results} upcoming trips</Typography>
  //   )
  // }

  return (
    <>
      {/* {bookedTrips.data.results && <Typography>You currently have {bookedTrips.data.results} upcoming trips</Typography>} */}

      {/* {bookedTrips.data.results > 0 ? <h5>trips exist </h5> : <h5>NO trips</h5>} */}
      {/* <BookedTripCard /> */}
      {/* {bookedTrips && bookedTrips.data.trips.map((trip, index) => (
        <BookedTripCard key={index} trip={trip} userId={userId} />
      ))} */}
      <Button onClick={getUpcomingTripsByUser} variant='contained'>
        Display data here
      </Button>
    </>
  )
}

export default UpcomingTrips
