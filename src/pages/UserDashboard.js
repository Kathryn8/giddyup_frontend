import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import About from '../components/About';
import { useAuth0 } from '@auth0/auth0-react';
import { Alert, Typography } from '@mui/material';
import UpcomingTrips from '../components/UpcomingTrips';
import CancelButton from '../components/CancelButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AlertCollapsable from '../components/AlertCollapsable';

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
        // if (!resp.ok) {
        //   setIsError(true);
        //   setIsLoading(false);
        //   return;
        // }
      } catch (error) {
        console.log(`TEST my error: ${error}`);
        setIsError(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    getUserIdFromEmailRequest();
  }, [user.email]);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  // const { avatar_url, name, company, bio } = user;
  console.log(`Line 61: ${userId}`);

  return (
    <>
      <Link to='/' className='btn'>
        back home
      </Link>
      {/* {isUser && userId && <Alert onClose={() => { }} severity="success">You have successfully logged in!</Alert>} */}
      {isUser && userId && <AlertCollapsable message='You have successfully logged in' severity='success'></AlertCollapsable>}
      {isUser && user.name && (
        <Typography>
          Welcome to your dashboard <strong>{user.name.toUpperCase()}</strong>
        </Typography>
      )}
      <UpcomingTrips userId={userId} />
      <SearchBar userId={userId} />

      <CancelButton />
      <About />
    </>

  )
}

export default UserDashboard