import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';


const UpcomingTrips = () => {
  const [trips, setTrips] = React.useState('');
  const url = 'http://127.0.0.1:5000/api/v1/trips/booked-trips'

  // const patchData = {
  //   "_id": tripId,
  //   "passenger": passengerId
  // }

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
        params: {
          "passenger": '65388a9f6b835a3128e2d24c',
        },
      });
      console.log(`response::: ${resp.data.trips[0]}`)
      setTrips(resp)
    } catch (error) {
      console.log(`my error::: ${error.response}`);
    }
  }
  return (
    <Button onClick={handlePost} variant='contained'>
      Display data here
    </Button>
  )
}

export default UpcomingTrips

// < h2 style = {{ padding: '32px', textAlign: 'center' }}> Upcoming Trips</ >
{/* <h3 style={{ padding: '32px', textAlign:'center' }}> You have no upcoming Trips...</h3>
<TripCard/> */}
{/* <BookedTrips /> */ }