import React from 'react'
import SearchBar from '../components/SearchBar';
import About from '../components/About';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Container, Box, Divider } from '@mui/material';
import UpcomingTrips from '../components/UpcomingTrips';
import axios from 'axios';
import { useEffect, useState } from 'react';
import seahorseBeach from '../assets/images/icon.png';
import YourStats from '../components/YourStats';
import authFetch from '../axios/interceptors';
import ServerError from './ServerError';


const UserDashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userId, setUserId] = useState(null);

  const url = process.env.REACT_APP_BASE_URL + '/users/search-email'

  useEffect(() => {
    const getUserIdFromEmailRequest = async () => {
      try {
        const resp = await authFetch.get(url, {
          headers: {
            Accept: 'application/json',
          },
          params: {
            email: user.email
          },
        });
        console.log(`UserId as fetched from db by email: ${resp.data.data.user._id}`)
        setUserId(resp.data.data.user._id)
      } catch (error) {
        console.log(`TEST my error: ${error}`);
        setIsError(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    getUserIdFromEmailRequest();
  }, [user.email]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <ServerError />
    )
  }

  return (
    <Container >
      <Box sx={{ py: 3 }}>
        {
          isUser && user.name && (
            <Typography sx={{ textAlign: 'center', color: 'grey' }}>
              Welcome to your dashboard <strong>{user.name.toUpperCase()}</strong>
            </Typography>
          )
        }
      </Box>
      <Divider />
      <UpcomingTrips userId={userId} />
      <Divider />
      <SearchBar userId={userId} />
      <YourStats userId={userId} />
    </Container >
  )
}

export default UserDashboard