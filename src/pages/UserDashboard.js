import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
// import TripCard from '../components/TripCard';
import About from '../components/About';
// import BookedTrips from '../components/BookedTrips';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import UpcomingTrips from '../components/UpcomingTrips';
import CancelButton from '../components/CancelButton';



const UserDashboard = () => {
  const { isAuthenticated, user, } = useAuth0();

  const isUser = isAuthenticated && user;


  return (
    <>
      <Link to='/' className='btn'>
        back home
      </Link>
      {/* <h1 styles={{ minHeight: '600px' }}>test</h1> */}
      {isUser && user.name && (
        <Typography>
          Welcome to your dashboard <strong>{user.name.toUpperCase()}</strong>
        </Typography>
      )}
      {/* <h1 style={{ padding: '32px' }}>hi there, Bryce</h1> */}
      <SearchBar />
      <UpcomingTrips />
      <CancelButton />
      <About />
    </>

  )
}

export default UserDashboard