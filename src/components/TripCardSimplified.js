import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';


const TripCardSimplified = ({ trip }) => {
  const { name, origin, destination, deptDate } = trip;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>Origin: {origin}</Typography>
        <Typography>Destination: {destination}</Typography>
        <Typography>Departure Date: {deptDate}</Typography>
      </CardContent>
    </Card>
  )
}

export default TripCardSimplified