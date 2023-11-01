import React from 'react';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import BookingButton from './BookingButton';

const TripCard = ({ trip }) => {
  const { name, origin, destination, deptDate } = trip;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>Origin: {origin}</Typography>
        <Typography>Destination: {destination}</Typography>
        <Typography>Departure Date: {deptDate}</Typography>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <BookingButton />
        <BookingButton tripId='65390389168ea9d1620f988b' passengerId='65388a9f6b835a3128e2d24c' />
      </CardActions>
    </Card>
  );
};

export default TripCard;
