import React from 'react'
import { Button } from '@mui/material';
import authFetch from '../axios/interceptors';

const CancelButton = ({ tripId, handleClose }) => {
  const setTrips = React.useState('');
  const url = '/trips/cancel-trip'


  const handlePost = async () => {
    try {
      const resp = await authFetch.patch(url, {
        "_id": tripId
      });
      setTrips(resp)
    } catch (error) {
      console.log(error.response);
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