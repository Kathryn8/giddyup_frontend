import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import authFetch from '../axios/interceptors';
import AlertCollapsable from './AlertCollapsable';

const url = '/trips/booking-button' // is there "":ID" here??'

const BookingButton = ({ tripId, passengerId, handleClose }) => {
  const [bookingResponse, setBookingResponse] = React.useState('');

  console.log(passengerId);

  const handlePost = async (e) => {
    // e.preventDefault();
    try {
      const resp = await authFetch.patch(url, {
        "_id": tripId,
        "passenger": passengerId
      }, { param: true })
      console.log(`Checkpoint 1`)
      console.log(`response::: ${resp.data.status}`)
      setBookingResponse(resp.data.status);
      console.log(`Checkpoint 1`);
    } catch (error) {
      console.log(`my error::: ${error.response.data.status}`);
      setBookingResponse(error.response.data.status);
    }
  }

  console.log(`here is the bookingResponse: ${bookingResponse}`)

  // if (bookingResponse === 'success') {
  //   return <AlertCollapsable message='You have booked a trip' severity='success'></AlertCollapsable>;
  // }

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
