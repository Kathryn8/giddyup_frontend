import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';
import CancelButton from '../components/CancelButton';
import DriverProfile from '../pages/DriverProfile';
import CloseIcon from '@mui/icons-material/Close';


const BookedTripCard = ({ trip }) => {
  const { name, origin, destination, deptDate, deptDateTime, _id: tripId } = trip;

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',
  };

  // Set up the states for the "are you sure you want to book? button"
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

  return (
    <Card style={cardStyle} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3">{name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle1'>
              Origin: {origin}
            </Typography>
            <Typography variant='subtitle1'>
              Destination: {destination}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle1'>
              Departure Date: {formattedDate}
            </Typography>
            <Typography variant='subtitle1'>
              Departure Time: {formattedTime}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ padding: 2 }}>
        <Grid container spacing={1}>

          <Grid item xs={6} sm={9}>
            {/* Driver info button and directly under is the dialog pop-up box code: */}
            <Button sx={{ ml: -1 }} variant="contained" color="secondary" onClick={handleClickOpenBasicDialog}>
              Driver Info
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

          <Grid item xs={6} sm={3}>
            {/* Booking button and directly under is the dialog pop-up box code: */}
            <Button color="warning" variant="contained" onClick={handleClickOpen}>
              Cancel trip
            </Button>
            <Dialog
              open={openAlertDialog}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to cancel this trip?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <TripCardSimplified trip={trip} />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="info" variant="contained">No, keep this trip</Button>
                <CancelButton tripId={tripId} handleClose={handleCloseRefresh} />
              </DialogActions>
            </Dialog>

          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default BookedTripCard;
