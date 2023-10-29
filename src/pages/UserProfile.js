import React from 'react';
import { Link } from 'react-router-dom';


const UserProfile = () => {

  return (
    <>
      <Link to='/' className='btn'>
        back home
      </Link>
      <h1 style={{ height: '80vh' }}>User profile page will go here</h1 >
    </>
  );
};
export default UserProfile;
