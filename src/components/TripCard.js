import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
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
  const textStyles = {
    margin: '2px 0',
  };
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlertDialog(true);
  };

  const handleClose = () => {
    setOpenAlertDialog(false);
  };


  return (
    <Card style ={cardStyle} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography style={textStyles}>Origin: {origin}</Typography>
        <Typography style={textStyles}>Destination: {destination}</Typography>
        <Typography style={textStyles}>Departure Date: {deptDate}</Typography>
        <Typography>Departure Time: {deptDateTime}</Typography>
        <Typography style={textStyles}>Driver Name: George 4.6</Typography>
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

export default TripCard;
