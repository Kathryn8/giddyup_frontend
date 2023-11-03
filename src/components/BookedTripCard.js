import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import BookingButton from './BookingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';

const BookedTripCard = ({ trip, userId }) => {
  const { name, origin, destination, deptDate, _id: tripId } = trip;

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlertDialog(true);
  };

  const handleClose = () => {
    setOpenAlertDialog(false);
  };


  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>Origin: {origin}</Typography>
        <Typography>Destination: {destination}</Typography>
        <Typography>Departure Date: {deptDate}</Typography>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
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
            <BookingButton tripId={tripId} passengerId={userId} handleClose={handleClose} />
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default BookedTripCard;
