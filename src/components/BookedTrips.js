import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TripInfo from '../TripInfo';

const TripCard = ({ tripInfo }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',
  };
    const textStyles = {
    margin: '2px 0',
  };



  return (
    <Box style={cardStyle}>
      <div>
        <h3 style={textStyles}>{tripInfo.title}</h3>
        <p style={textStyles}>Origin: {tripInfo.origin}</p>
        <p style={textStyles}>Destination: {tripInfo.destination}</p>
        <p style={textStyles}>Departure Date: {tripInfo.deptDate}</p>
      </div>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" disabled>
          Booked
        </Button>
        <Button variant="outlined" color="primary">
          Cancel
        </Button>
      </Grid>
    </Box>
  );
};

const App = () => {
  return (
    <div>
      <TripCard tripInfo={TripInfo.tripInfo1} /> 
     </div>
  );
};

export default App;
