import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';


const CancelButton = ({ tripId, handleClose }) => {
  const [trips, setTrips] = React.useState('');
  const url = 'http://127.0.0.1:5000/api/v1/trips/cancel-trip'

  // const patchData = {
  //   "_id": tripId,
  //   "passenger": passengerId
  // }

  const handlePost = async (e) => {
    // e.preventDefault();
    try {
      const resp = await axios.patch(url, {
        "_id": tripId
      });
      // console.log(`response::: ${resp.data.trips[0]}`)
      setTrips(resp)
    } catch (error) {
      console.log(`my error::: ${error.response}`);
    }
  }

  const handleButtonClick = () => {
    handlePost();
    handleClose();
  }

  return (
    <Button color="error" onClick={handleButtonClick} variant='contained'>
      Yes, cancel this trip
    </Button>
  )
}

export default CancelButton