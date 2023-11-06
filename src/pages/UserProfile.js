import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import platinum from '../assets/images/giddyUpStatusBadge.png';
import gold from '../assets/images/giddyUpStatusBadge (1).png';
import silver from '../assets/images/giddyUpStatusBadge (2).png';
import bronze from '../assets/images/giddyUpStatusBadge (3).png';

const UserProfile = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userObj, setUserObj] = useState({});

  const url1 = 'http://127.0.0.1:5000/api/v1/users/search-email';
  const url2 = 'http://127.0.0.1:5000/api/v1/users/654313801462530013767733';

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
      const resp = await axios.get(url2, {
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

  const verify = [userObj?.user?.email_verified, userObj?.user?.verified?.driverLicense, userObj?.user?.verified?.phoneVerified];

  const allChecked = !checkDiff(verify) && verify[0] === true;
  const noneChecked = !checkDiff(verify) && (verify[0] === false);
  const someChecked = checkDiff(verify);
  console.log(allChecked);
  console.log(noneChecked);
  console.log(someChecked);

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
      <Typography variant="h6" sx={{ m: 1 }}>
        Your profile:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
        <Box>
          <Typography sx={{ m: 1 }} variant="h3">
            {userObj.user.name || userObj.user.email.split('@')[0]}
          </Typography>
        </Box>
        <Avatar alt="Remy Sharp" src={user.picture} sx={{ width: 100, height: 100 }} />
      </Box>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', m: 1 }}>
          <Box component="img" sx={{ maxHeight: '40px', maxWidth: '40px' }} src={bronze} />
          <Typography sx={{ m: 1 }}>Giddy-upper status: {userObj.user.statusLevel}</Typography>
        </Box>
        <Typography sx={{ m: 1 }}>
          Rating average: {userObj.user.ratingsAverage} from {userObj.user.ratingsCount} ratings
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        {allChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            Your profile is fully verified
          </Typography>}

        {noneChecked &&
          <>
            <Typography sx={{ m: 1 }} variant="h5">
              Your profile is not verified
            </Typography>
            <Typography sx={{ m: 1 }}>Please update this section to maintain our community of trust</Typography>
          </>}
        {someChecked &&
          <Typography sx={{ m: 1 }} variant="h5">
            Your profile is partially verified
          </Typography>}

        <Typography sx={{ m: 1 }}>
          <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Email verified
        </Typography>
        <Typography sx={{ m: 1 }}>
          <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> License confirmed
        </Typography>
        <Typography sx={{ m: 1 }}>
          <VerifiedUserIcon color="success" sx={{ verticalAlign: 'middle' }} /> Phone number confirmed
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography sx={{ margin: 1 }} variant="h5">
          About FirstName
        </Typography>
        <Typography sx={{ m: 1 }}>{"I love chocolate"}</Typography>
        <Typography sx={{ m: 1 }}>Preferences: music</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          FirstName's GiddyUp Activity
        </Typography>
        <Typography sx={{ m: 1 }}>Rides offered: X</Typography>
        <Typography sx={{ m: 1 }}>Rides taken: X</Typography>
        <Typography sx={{ m: 1 }}>Last ride: DATE</Typography>
      </Box>
    </Container>
  );
};

export default UserProfile;
