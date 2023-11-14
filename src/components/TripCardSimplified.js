import React from 'react'
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import metro from '../assets/images/metro_green_360.png';
import GradeIcon from '@mui/icons-material/Grade';


const TripCardSimplified = ({ trip, userID }) => {
  const { origin, destination, deptDate, deptDateTime, _id: tripId, driver } = trip;
  const apiDate = deptDate;
  const date = new Date(apiDate);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const apiTime = deptDateTime;
  const time = new Date(apiTime);
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  let formattedTime;
  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  if (hours === 0) {
    formattedTime = `${minutes}:${addLeadingZero(seconds)} ${ampm}`;
  } else {
    formattedTime = `${hours % 12}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${ampm}`;
  }


  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <Box >
            <Typography variant='h6' style={{ padding: '3px' }}>
              {formattedTime}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box
              component="img"
              sx={{
                py: 0.5,
                px: 0.3,
                height: 87,
                width: 50,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="Travel symbol"
              src={metro}
            />
          </Box>
          <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', }}>
            <Typography variant='h6'>
              {origin}
            </Typography>
            <br></br>
            <Typography variant='h6'>
              {destination}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Avatar alt={driver.firstName} src={process.env.REACT_APP_BASE_URL_IMAGES + driver.profileImage} sx={{ width: 70, height: 70 }} />
            </Box>
            <Typography sx={{ textAlign: 'right', pt: 1 }}>
              {driver.firstName}
            </Typography>
            <Typography sx={{ textAlign: 'right' }}>
              <GradeIcon sx={{ verticalAlign: 'top' }} /> {driver.ratingsAverage}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TripCardSimplified