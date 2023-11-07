import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';
import CancelButton from '../components/CancelButton';

const BookedTripCard = ({ trip }) => {
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">{name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Origin: {origin}
            </Typography>
            <Typography>
              Destination: {destination}
            </Typography>
            <Typography>
              Driver Name: George 4.6
            </Typography>
          </Grid>
          <Grid item xs={6}>
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
        <Button color="warning" variant="contained" onClick={handleClickOpen}>
          Cancel this trip
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
      </CardActions>
    </Card>
  );
};

export default BookedTripCard;
