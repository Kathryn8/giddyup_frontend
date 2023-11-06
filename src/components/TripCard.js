import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import BookingButton from './BookingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';

const TripCard = ({ trip, userId }) => {
  const { name, origin, destination, deptDate, deptDateTime, _id: tripId } = trip;
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',
    
  };
    
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlertDialog(true);
  };

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  const handleCloseRefresh = () => {
    setOpenAlertDialog(false);
    window.location = "/dashboard";
  };

  
  const apiDate = deptDate;
  const date = new Date(apiDate);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;


const apiTime = deptDateTime; // Assuming deptDateTime is in the format 'YYYY-MM-DDTHH:mm:ss.sssZ'
const time = new Date(apiTime);

const hours = time.getUTCHours();
const minutes = time.getUTCMinutes();
const seconds = time.getUTCSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';

let formattedTime;

if (hours === 0) {
  formattedTime = `${minutes}:${seconds} ${ampm}`;
} else {
  formattedTime = `${hours % 12}:${minutes}:${seconds} ${ampm}`;
}

  return (
    <Card style={cardStyle} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">{name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" style={{ color: 'black' }}>
              Origin: {origin}
            </Typography>
            {/* <img src={require('../assets/images/startandend.png')} alt="Origin to Destination" /> */}
            <Typography variant="body1" style={{ color: 'black' }}>
              Destination: {destination}
            </Typography>
            <Typography variant="body1" style={{ color: 'black' }}>
              Driver Name: George 4.6
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" style={{ color: 'black' }}>
              Departure Date: {formattedDate}
            </Typography>
            <Typography variant="body1" style={{ color: 'black' }}>
              Departure Time: {formattedTime}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <Button sx ={{alignItems: 'Right'}} variant="contained" >
          Learn more about your Driver
        </Button>
        <Button variant="contained" onClick={handleClickOpen}>
          Book this trip now
        </Button>
        <Dialog
          open={openAlertDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to book this trip?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TripCardSimplified trip={trip} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="warning" variant="contained">Cancel</Button>
            <BookingButton tripId={tripId} passengerId={userId} handleClose={handleCloseRefresh} />
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default TripCard;
