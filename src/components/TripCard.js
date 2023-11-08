import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid, IconButton } from '@mui/material';
import BookingButton from './BookingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';
import DriverProfile from '../pages/DriverProfile';
import CloseIcon from '@mui/icons-material/Close';


const TripCard = ({ trip, userId }) => {

  const { name, origin, destination, deptDate, deptDateTime, _id: tripId } = trip;
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',

  };

  // Set up the states for the "are you sure you want to book? button"
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleClickOpenAlertDialog = () => {
    setOpenAlertDialog(true);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  const handleCloseRefreshAlertDialog = () => {
    setOpenAlertDialog(false);
    window.location = "/dashboard";
  };

  // Set up the states for the "Know about your driver" pop-up
  const [openBasicDialog, setOpenBasicDialog] = React.useState(false);

  const handleClickOpenBasicDialog = () => {
    setOpenBasicDialog(true);
  };

  const handleCloseBasicDialog = () => {
    setOpenBasicDialog(false);
  };


  const apiDate = deptDate;
  const date = new Date(apiDate);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;


  const apiTime = deptDateTime;
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

  console.log(trip.driver)

  return (
    <Card style={cardStyle} sx={{ marginBottom: 2 }}>
      <CardContent sx={{ p: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4">{name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              Origin: {origin}
            </Typography>
            <Typography>
              Destination: {destination}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              Departure Date: {formattedDate}
            </Typography>
            <Typography>
              Departure Time: {formattedTime}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ padding: 2 }}>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            {/* Driver button and directly under is the dialog pop-up box code: */}
            <Button sx={{ alignItems: 'Right' }} variant="contained" color="secondary" onClick={handleClickOpenBasicDialog}>
              Learn more about your Driver
            </Button>
            <Dialog
              onClose={handleCloseBasicDialog}
              open={openBasicDialog}
              aria-labelledby="learn-more-about-your-driver"
              aria-describedby="a-pop-up-with-driver-profile-information">
              <DialogTitle id="alert-dialog-title">
                {"Meet your driver"}
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleCloseBasicDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DriverProfile driverId={trip.driver} />
            </Dialog>
          </Grid>

          <Grid item xs={12} sm={5}>
            {/* Booking button and directly under is the dialog pop-up box code: */}
            <Button variant="contained" onClick={handleClickOpenAlertDialog} sx={{ mx: { xs: 6, sm: 0 } }} >
              Book this trip now
            </Button>
            <Dialog
              open={openAlertDialog}
              onClose={handleCloseAlertDialog}
              aria-labelledby="Confirmation of booking choice"
              aria-describedby="Pop up to confirm your booking choice"
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
                <Button onClick={handleCloseAlertDialog} color="warning" variant="contained">Cancel</Button>
                <BookingButton tripId={tripId} passengerId={userId} handleClose={handleCloseRefreshAlertDialog} />
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  );
};

export default TripCard;
