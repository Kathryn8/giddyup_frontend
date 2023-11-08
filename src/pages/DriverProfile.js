import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Avatar, Divider, Badge } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import platinum from '../assets/images/giddyUpStatusBadgePlatinum.png';
import gold from '../assets/images/giddyUpStatusBadgeGold.png';
import silver from '../assets/images/giddyUpStatusBadgeSilver.png';
import bronze from '../assets/images/giddyUpStatusBadgeBronze.png';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const DriverProfile = ({ driverId }) => {
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userObj, setUserObj] = useState({});

  // const url1 = process.env.REACT_APP_BASE_URL + '/users/search-email';
  const url2 = process.env.REACT_APP_BASE_URL + '/users/65384f11dfd2275c16556df6';

  // useEffect(() => {
  //   const getUserIdFromEmailRequest = async () => {
  //     try {
  //       const resp = await axios.get(url1, {
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //         params: {
  //           email: user.email,
  //         },
  //       });

  //       const userId = await resp.data.data.user._id;
  //       console.log("1");
  //       await getSingleUserProfile(userId);
  //       console.log("2");

  //       console.log(userId)
  //     } catch (error) {
  //       setIsError(true);
  //       console.log(`error-1: ${error}`);

  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getUserIdFromEmailRequest();
  //   console.log("3");

  // }, [user.email]);

  useEffect(() => {
    const getSingleUserProfile = async (userId) => {
      try {
        const resp = await axios.get(url2, {
          headers: {
            Accept: 'application/json',
          },
        });
        const x = await setUserObj(resp.data.data);
        console.log(userObj);
      } catch (error) {
        setIsError(true);
        console.log(`error-2: ${error}`);

      } finally {
        setIsLoading(false);
      }
    };
    getSingleUserProfile()
  }, [user.email]);

  function checkDiff(a) {
    return new Set(a).size !== 1;
  }

  // Verification variables:
  const verify = [userObj?.user?.email_verified, userObj?.user?.verified?.driverLicense, userObj?.user?.verified?.phoneVerified];

  const allChecked = !checkDiff(verify) && verify[0] === true;
  const noneChecked = !checkDiff(verify) && (verify[0] === false);
  const someChecked = checkDiff(verify);
  console.log(allChecked);
  console.log(noneChecked);
  console.log(someChecked);

  // Status badge mapper:
  const badges = {
    'platinum': platinum,
    'gold': gold,
    'silver': silver,
    'bronze': bronze
  }
  console.log("HERE")
  console.log(userObj?.user?.statusLevel)
  console.log(badges[userObj?.user?.statusLevel])

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <Container sx={{ p: 4, minHeight: '50vh' }}>
        <Typography variant="h2">There was an error...</Typography>
        <Typography variant="h3">Try refreshing the page?</Typography>
        <Typography variant="h3">Check if your server is running.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ p: 1 }}>
      <Typography variant="h5" sx={{ m: 1, p: 1 }}>
        Meet your driver
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1 }}>
        <Box sx={{ m: 1 }}>
          {/* <Typography sx={{ my: 1 }} variant="h3">
            {userObj?.user?.firstName || userObj?.user?.email.split('@')[0]}
          </Typography> */}
          <Typography variant="h3" sx={{ my: 1 }}>
            Hi, I'm {userObj?.user?.firstName || userObj?.user?.email.split('@')[0]}
          </Typography>
          <Box sx={{ py: 0 }}>

            <Typography sx={{ lineHeight: 2.5 }}>{userObj.user.statusLevel.toUpperCase()}</Typography>

            <Typography>
              Ratings: {userObj.user.ratingsAverage} from {userObj.user.ratingsCount} ratings
            </Typography>
          </Box>
        </Box>
        <Badge overlap="circular" sx={{ m: 'auto 0' }} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} badgeContent={<Box component="img" sx={{ maxHeight: '70px', maxWidth: '70px' }} src={badges[userObj?.user?.statusLevel]} />}>
          <Avatar alt={userObj?.user?.firstName} src={process.env.REACT_APP_BASE_URL_IMAGES + userObj?.user?.profileImage} sx={{ my: 3, width: 120, height: 120 }} />

        </Badge>
        {/* <img src={userObj.user.profileImage} alt={`${userObj.user.name}'s profile`} /> */}
      </Box>

      {/* <Box sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box component="img" sx={{ maxHeight: '40px', maxWidth: '40px', mr: 1 }} src={bronze} />
          <Typography sx={{ lineHeight: 2.5 }}>{userObj.user.statusLevel.toUpperCase()} </Typography>
        </Box>
        <Typography>
          Rating average: {userObj.user.ratingsAverage} from {userObj.user.ratingsCount} ratings
        </Typography>
      </Box> */}
      {!noneChecked &&
        <Divider />}

      <Box sx={{ p: 1 }}>

        {allChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            {userObj?.user?.firstName}'s profile is fully verified
          </Typography>}

        {someChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            {userObj?.user?.firstName}'s profile is partially verified
          </Typography>}

        {noneChecked &&
          <></>}

        {userObj?.user?.email_verified
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Email verified
          </Typography>
          :
          <></>}

        {userObj?.user?.verified?.driverLicense
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> License confirmed
          </Typography>
          :
          <></>}

        {userObj?.user?.verified?.phoneVerified
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Phone number confirmed
          </Typography>
          :
          <></>}

      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          About {userObj?.user?.firstName}
        </Typography>
        <Typography sx={{ m: 1 }}>"{userObj?.user?.aboutMe}"</Typography>
        <Typography sx={{ m: 1 }}>Preferences: {userObj?.user?.preferences}</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          {userObj?.user?.firstName}'s GiddyUp Activity
        </Typography>
        <Typography sx={{ m: 1 }}>Rides offered: {userObj?.user?.latestActivity?.ridesOffered} </Typography>
        <Typography sx={{ m: 1 }}>Rides taken: {userObj?.user?.latestActivity?.ridesTaken}</Typography>
        <Typography sx={{ m: 1 }}>Last ride: {new Date(userObj?.user?.latestActivity?.lastRide).toLocaleDateString()}</Typography>
      </Box>
    </Container>
  );
};

export default DriverProfile;
