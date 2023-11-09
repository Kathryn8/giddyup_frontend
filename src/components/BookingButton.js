import React from 'react'
import { Button } from '@mui/material';
import authFetch from '../axios/interceptors';

const url = '/trips/booking-button' // is there "":ID" here??'

const BookingButton = ({ tripId, passengerId, handleClose }) => {
  const [bookingResponse, setBookingResponse] = React.useState('');

  const handlePost = async (e) => {
    // e.preventDefault();
    try {
      const resp = await authFetch.patch(url, {
        "_id": tripId,
        "passenger": passengerId
      }, { param: true })
      setBookingResponse(resp.data.status);
    } catch (error) {
      console.log(error.response.data.status);
      setBookingResponse(error.response.data.status);
    }
  }

  const handleButtonClick = () => {
    handlePost();
    handleClose();
  }

  return (
    <>
      <Button onClick={handleButtonClick} variant='contained'>
        Book this trip
      </Button>
    </>
  )
}

export default BookingButton
