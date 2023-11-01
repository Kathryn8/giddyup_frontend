import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';


const CancelButton = () => {
  const [trips, setTrips] = React.useState('');
  const url = 'http://127.0.0.1:5000/api/v1/trips/cancel-trip'

  // const patchData = {
  //   "_id": tripId,
  //   "passenger": passengerId
  // }

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(url, {
        "_id": "653909285436af98aba3fdd9"
      });
      console.log(`response::: ${resp.data.trips[0]}`)
      setTrips(resp)
    } catch (error) {
      console.log(`my error::: ${error.response}`);
    }
  }
  return (
    <Button onClick={handlePost} variant='contained'>
      CancelButton
    </Button>
  )
}

export default CancelButton