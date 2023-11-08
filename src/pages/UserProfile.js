import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Avatar, Divider } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import platinum from '../assets/images/giddyUpStatusBadgePlatinum.png';
import gold from '../assets/images/giddyUpStatusBadgeGold.png';
import silver from '../assets/images/giddyUpStatusBadgeSilver.png';
import bronze from '../assets/images/giddyUpStatusBadgeBronze.png';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const UserProfile = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userObj, setUserObj] = useState({});

  const url1 = process.env.REACT_APP_BASE_URL + '/users/search-email';
  const url2 = process.env.REACT_APP_BASE_URL + '/users/';

  useEffect(() => {
    const getUserIdFromEmailRequest = async () => {
      try {
        const resp = await axios.get(url1, {
          headers: {
            Accept: 'application/json',
          },
          params: {
            email: user.email,
          },
        });

        const userId = await resp.data.data.user._id;
        console.log("1");
        await getSingleUserProfile(userId);
        console.log("2");

        console.log(userId)
      } catch (error) {
        setIsError(true);
        console.log(`error-1: ${error}`);

      } finally {
        setIsLoading(false);
      }
    };

    getUserIdFromEmailRequest();
    console.log("3");

  }, [user.email]);

  const getSingleUserProfile = async (userId) => {
    try {
      const resp = await axios.get(url2 + userId, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log("4");
      const x = await setUserObj(resp.data.data);
      console.log("5");
      console.log(userObj);
    } catch (error) {
      setIsError(true);
      console.log(`error-2: ${error}`);

    } finally {
      setIsLoading(false);
    }
  };
  console.log("6");

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

  console.log(userObj?.user?.profileImage);

  const badges = {
    'platinum': platinum,
    'gold': gold,
    'silver': silver,
    'bronze': bronze
  }

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
      <Typography variant="h4" sx={{ m: 1, p: 1 }}>
        Hello, {userObj?.user?.firstName || userObj?.user?.email.split('@')[0]}
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Box sx={{ m: 1 }}>
          {/* <Typography sx={{ my: 1 }} variant="h3">
            {userObj?.user?.firstName || userObj?.user?.email.split('@')[0]}
          </Typography> */}
          <Box sx={{ py: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Box component="img" sx={{ maxHeight: '40px', maxWidth: '40px', mr: 1, ml: -1 }} src={badges[userObj?.user?.statusLevel]} />
              <Typography sx={{ lineHeight: 2.5 }}>{userObj.user.statusLevel.toUpperCase()} </Typography>
            </Box>
            <Typography>
              Rating average: {userObj.user.ratingsAverage} from {userObj.user.ratingsCount} ratings
            </Typography>
          </Box>
        </Box>
        {/* <img src={userObj.user.profileImage} alt={`${userObj.user.name}'s profile`} /> */}
        <Avatar alt={userObj?.user?.firstName} src={process.env.REACT_APP_BASE_URL_IMAGES + userObj?.user?.profileImage} sx={{ my: 1, width: 100, height: 100 }} />
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
      <Divider />
      <Box sx={{ p: 1 }}>

        {allChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            Your profile is fully verified
          </Typography>}

        {someChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            Your profile is partially verified
          </Typography>}

        {noneChecked &&
          <>
            <Typography sx={{ m: 1 }} variant="h5">
              Your profile is not verified
            </Typography >
            <Typography sx={{ mb: 1 }}> Please update this section to maintain our community of trust</Typography>
          </>}

        {userObj?.user?.email_verified
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Email verified
          </Typography>
          :
          <Typography sx={{ m: 1 }}>
            <GppMaybeIcon color="error" sx={{ verticalAlign: 'middle' }} /> Email not yet verified
          </Typography>}

        {userObj?.user?.verified?.driverLicense
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> License confirmed
          </Typography>
          :
          <Typography sx={{ m: 1 }}>
            <GppMaybeIcon color="error" sx={{ verticalAlign: 'middle' }} /> License not yet confirmed
          </Typography>}

        {userObj?.user?.verified?.phoneVerified
          ?
          <Typography sx={{ m: 1 }}>
            <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Phone number confirmed
          </Typography>
          :
          <Typography sx={{ m: 1 }}>
            <GppMaybeIcon color="error" sx={{ verticalAlign: 'middle' }} /> Phone not yet number confirmed
          </Typography>}

      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          About me
        </Typography>
        <Typography sx={{ m: 1 }}>"{userObj?.user?.aboutMe}"</Typography>
        <Typography sx={{ m: 1 }}>Preferences: {userObj?.user?.preferences}</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          Your GiddyUp Activity
        </Typography>
        <Typography sx={{ m: 1 }}>Rides offered: {userObj?.user?.latestActivity?.ridesOffered} </Typography>
        <Typography sx={{ m: 1 }}>Rides taken: {userObj?.user?.latestActivity?.ridesTaken}</Typography>
        <Typography sx={{ m: 1 }}>Last ride: {new Date(userObj?.user?.latestActivity?.lastRide).toLocaleDateString()}</Typography>
      </Box>
    </Container>
  );
};

export default UserProfile;
