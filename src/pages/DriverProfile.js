import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Avatar, Divider, Badge, Skeleton } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import authFetch from '../axios/interceptors';
import platinum from '../assets/images/giddyUpStatusBadgePlatinum.png';
import gold from '../assets/images/giddyUpStatusBadgeGold.png';
import silver from '../assets/images/giddyUpStatusBadgeSilver.png';
import bronze from '../assets/images/giddyUpStatusBadgeBronze.png';

const DriverProfile = ({ driverId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userObj, setUserObj] = useState({});

  const url = '/users/' + driverId;

  useEffect(() => {
    const getSingleUserProfile = async () => {
      try {
        const resp = await authFetch.get(url, {
        });
        setUserObj(resp.data.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSingleUserProfile()
  }, []);



  // Verification variables:
  const verify = [userObj?.user?.email_verified, userObj?.user?.verified?.driverLicense, userObj?.user?.verified?.phoneVerified];

  function checkDiff(a) {
    return new Set(a).size !== 1;
  }

  const allChecked = !checkDiff(verify) && verify[0] === true;
  const noneChecked = !checkDiff(verify) && (verify[0] === false);
  const someChecked = checkDiff(verify);

  // Status badge mapper:
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
    userObj ?

      <Container maxWidth="md" sx={{ px: 2 }}>

        <Divider />

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          py: 1,
          mb: 1
        }}>

          <Box sx={{ m: 0 }}>
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

          <Badge overlap="circular" sx={{ m: { xs: '0 auto', md: 'auto 0' } }} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }} badgeContent={<Box component="img" sx={{ maxHeight: '70px', maxWidth: '70px' }} src={badges[userObj?.user?.statusLevel]} />}>
            <Avatar alt={userObj?.user?.firstName} src={process.env.REACT_APP_BASE_URL_IMAGES + userObj?.user?.profileImage} sx={{ my: 3, width: 120, height: 120 }} />
          </Badge>
        </Box>

        {
          !noneChecked &&
          <Divider />
        }

        <Box sx={{ py: 1 }}>
          {allChecked &&
            <Typography sx={{ my: 1 }} variant="h5">
              {userObj?.user?.firstName}'s profile is fully verified
            </Typography>}
          {someChecked &&
            <Typography sx={{ my: 1 }} variant="h5">
              {userObj?.user?.firstName}'s profile is partially verified
            </Typography>}
          {noneChecked &&
            <></>}

          {userObj?.user?.email_verified
            ?
            <Typography sx={{ my: 1 }}>
              <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Email verified
            </Typography>
            :
            <></>}

          {userObj?.user?.verified?.driverLicense
            ?
            <Typography sx={{ my: 1 }}>
              <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> License confirmed
            </Typography>
            :
            <></>}

          {userObj?.user?.verified?.phoneVerified
            ?
            <Typography sx={{ my: 1 }}>
              <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Phone number confirmed
            </Typography>
            :
            <></>}

        </Box>

        <Divider />

        <Box sx={{ py: 1 }}>
          <Typography sx={{ my: 1 }} variant="h5">
            About {userObj?.user?.firstName}
          </Typography>
          <Typography sx={{ my: 1 }}>"{userObj?.user?.aboutMe}"</Typography>
          <Typography sx={{ my: 1 }}>Preferences: {userObj?.user?.preferences}</Typography>
        </Box>

        <Divider />

        <Box sx={{ py: 1 }}>
          <Typography sx={{ my: 1 }} variant="h5">
            {userObj?.user?.firstName}'s GiddyUp Activity
          </Typography>
          <Typography sx={{ my: 1 }}>Rides offered: {userObj?.user?.latestActivity?.ridesOffered} </Typography>
          <Typography sx={{ my: 1 }}>Rides taken: {userObj?.user?.latestActivity?.ridesTaken}</Typography>
          <Typography sx={{ my: 1 }}>Last ride: {new Date(userObj?.user?.latestActivity?.lastRide).toLocaleDateString()}</Typography>
        </Box>

      </Container >

      :

      <Container maxWidth="md" sx={{ px: 2 }}>

        <Divider />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          py: 1,
          mb: 1
        }}>
          <Box sx={{ m: 0 }}>
            <Typography variant="h3" sx={{ my: 1 }}>
              <Skeleton variant="rounded" width={260} height={60} />
            </Typography>
            <Box sx={{ py: 0 }}>
              <Typography ><Skeleton variant="text" /></Typography>
              <Typography>
                <Skeleton variant="text" />
              </Typography>
            </Box>
          </Box>
          <Skeleton variant="circular" width={100} height={100} sx={{ mt: { xs: 0, sm: 3 }, ml: { xs: 10, sm: 3 } }}>
            <Avatar sx={{ my: 3, width: 120, height: 120 }} />
          </Skeleton>
        </Box>
        <Divider />
        <Box sx={{ py: 1 }}>
          <Typography sx={{ my: 1 }} variant="h5">
            <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
          </Typography>
          <Typography sx={{ my: 1 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Typography>
        </Box>
        <Divider />
        <Typography sx={{ my: 1 }} variant="h5">
          <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
        </Typography>
        <Typography sx={{ my: 1 }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Typography>

        <Divider />

        <Box sx={{ py: 1 }}>
          <Typography sx={{ my: 1 }} variant="h5">
            <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
          </Typography>
          <Typography sx={{ my: 1 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Typography>
        </Box>
      </Container >

  );
};

export default DriverProfile;
