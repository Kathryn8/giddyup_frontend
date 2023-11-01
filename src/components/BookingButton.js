import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

const url = 'http://127.0.0.1:5000/api/v1/trips/booking-button' // is there "":ID" here??'

const BookingButton = ({ tripId, passengerId }) => {

  // const patchData = {
  //   "_id": tripId,
  //   "passenger": passengerId
  // }

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(url, {
        "_id": tripId,
        "passenger": passengerId
      })
      console.log(`response::: ${resp.data}`)
    } catch (error) {
      console.log(`my error::: ${error.response}`);
    }
  }

  return (
    <>
      <Button onClick={handlePost} variant='contained'>
        Book
      </Button>
    </>
  )
}

export default BookingButton
