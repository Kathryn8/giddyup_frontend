import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid, IconButton, Box, Avatar } from '@mui/material';
import BookingButton from './BookingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TripCardSimplified from './TripCardSimplified';
import DriverProfile from '../pages/DriverProfile';
import CloseIcon from '@mui/icons-material/Close';
import metro from '../assets/images/metro_green_360.png';
import GradeIcon from '@mui/icons-material/Grade';

const TripCard = ({ trip, userId }) => {

  const { origin, destination, deptDate, deptDateTime, _id: tripId, driver } = trip;

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',
    color: 'blacks'
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
  const ampm = hours >= 12 ? 'pm' : 'am';
  let formattedTime;
  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  if (hours === 0) {
    formattedTime = `${minutes}:${addLeadingZero(seconds)} ${ampm}`;
  } else {
    formattedTime = `${hours % 12}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${ampm}`;
  }

  return (
    <Card style={cardStyle} sx={{ marginBottom: 2 }}>

      <CardContent sx={{ p: 1 }}>



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

      <CardActions sx={{ padding: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '0 1 600px' }}>

          <Box>
            <Button variant="contained" onClick={handleClickOpenAlertDialog}  >
              Book now
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
                <TripCardSimplified trip={trip} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAlertDialog} color="warning" variant="contained">Cancel</Button>
                <BookingButton tripId={tripId} passengerId={userId} handleClose={handleCloseRefreshAlertDialog} />
              </DialogActions>
            </Dialog>
          </Box>
          <Box>
            <Button variant="contained" color="secondary" onClick={handleClickOpenBasicDialog}>
              Driver Info
            </Button>
            <Dialog
              onClose={handleCloseBasicDialog}
              open={openBasicDialog}
              aria-labelledby="learn-more-about-your-driver"
              aria-describedby="a-pop-up-with-driver-profile-information">
              <DialogTitle id="alert-dialog-title">
                {/* {"Meet your driver"} */}
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleCloseBasicDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
              </IconButton>
              <DriverProfile driverId={trip.driver._id} />
            </Dialog>

          </Box>
        </Box>
      </CardActions>
    </Card >
  );
};

export default TripCard;
