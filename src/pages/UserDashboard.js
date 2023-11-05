import React from 'react'
import SearchBar from '../components/SearchBar';
import About from '../components/About';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Container } from '@mui/material';
import UpcomingTrips from '../components/UpcomingTrips';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserDashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log(`The user object: ${user.email}`) //works

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userId, setUserId] = useState(null);

  const url = 'http://127.0.0.1:5000/api/v1/users/search-email'

  useEffect(() => {
    const getUserIdFromEmailRequest = async () => {
      try {
        const resp = await axios.get(url, {
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
      <Container sx={{ p: 4 }}>
        <Typography variant='h2'>There was an error...</Typography>,
        <Typography variant='h3'>Try refreshing the page?</Typography>
      </Container>
    )
  }
  console.log(`Line 61: ${userId}`);

  return (
    <Container sx={{ p: 4 }}>
      {isUser && user.name && (
        <Typography>
          Welcome to your dashboard <strong>{user.name.toUpperCase()}</strong>
        </Typography>
      )}
      <UpcomingTrips userId={userId} />
      <SearchBar userId={userId} />
      <About />
    </Container>
  )
}

export default UserDashboard