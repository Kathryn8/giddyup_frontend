import React from 'react'
import SearchBar from '../components/SearchBar';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Container, Box, Divider, CircularProgress } from '@mui/material';
import UpcomingTrips from '../components/UpcomingTrips';
import { useEffect, useState } from 'react';
import YourStats from '../components/YourStats';
import authFetch from '../axios/interceptors';
import ServerError from './ServerError';

const UserDashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userId, setUserId] = useState(null);

  const url = '/users/search-email'

  useEffect(() => {
    const getUserIdFromEmailRequest = async () => {
      try {
        const resp = await authFetch.get(url, {
          params: {
            email: user.email
          },
        });
        setUserId(resp.data.data.user._id)
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getUserIdFromEmailRequest();
  }, [user.email]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '55vh' }}>
        <CircularProgress color="secondary" />
      </Box>
    )
  }

  if (isError) {
    return (
      <ServerError />
    )
  }

  return (
    <Container >
      <Box sx={{ py: 3 }}>
        {isUser && user.name && (
          <Typography sx={{ textAlign: 'center', color: 'grey' }}>
            Welcome to your dashboard <strong>{user.name.toUpperCase()}</strong>
          </Typography>
        )}
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