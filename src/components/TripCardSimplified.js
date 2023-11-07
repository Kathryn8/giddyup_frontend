import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';


const TripCardSimplified = ({ trip }) => {
  const { name, origin, destination, deptDate } = trip;
  const apiDate = deptDate;
  const date = new Date(apiDate);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>Origin: {origin}</Typography>
        <Typography>Destination: {destination}</Typography>
        <Typography>Departure Date: {formattedDate}</Typography>
      </CardContent>
    </Card>
  )
}

export default TripCardSimplified