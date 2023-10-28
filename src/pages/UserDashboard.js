import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import TripCard from '../components/TripCard';
import About from '../components/About';
import BookedTrips from '../components/BookedTrips';

const UserDashboard = () => {
  return (
    <>
      <Link to='/' className='btn'>
        back home
      </Link>
      {/* <h1 styles={{ minHeight: '600px' }}>test</h1> */}
      <h1 style={{ padding: '32px'}}>hi there, Bryce</h1>
      <SearchBar/>
      <h2 style={{ padding: '32px', textAlign:'center' }}>Upcoming Trips</h2>
       {/* <h3 style={{ padding: '32px', textAlign:'center' }}> You have no upcoming Trips...</h3>
      <TripCard/> */}
      <BookedTrips/>
      <About/>
    </>

  )
}

export default UserDashboard