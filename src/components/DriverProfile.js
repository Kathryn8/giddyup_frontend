// import { Container, Box, Typography, Avatar } from '@mui/material';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const UserProfile = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);

//   const url = 'http://127.0.0.1:5000/api/v1/users'

//   useEffect(() => {
//     const getUserProfileFromUserId = async () => {
//       try {
//         const resp = await axios.get(url, {
//           headers: {
//             Accept: 'application/json',
//           },
//           params: {
//             id: user.email
//           },
//         });
//         console.log(`user profile as fetched from db by id: ${resp.data.data.user.name}`)
//         setUserProfile(resp.data.data.user.name)
//       } catch (error) {
//         console.log(`opps!: ${error}`);
//         setIsError(true);
//         setIsLoading(false);
//       }
//       setIsLoading(false);
//     };
//     getUserProfileFromUserId();
//   }, [user.email]);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return (
//       <Container sx={{ p: 4 }}>
//         <Typography variant='h2'>There was an error...</Typography>,
//         <Typography variant='h3'>Try refreshing the page?</Typography>
//         <Typography variant='h3'>Check your server is running buddy!. </Typography>

//       </Container>
//     )
//   }

//   return (
//     <Container maxWidth="md" sx={{ p: 1 }}>
//       <Typography variant='h6' sx={{ m: 1 }}>:User profile:</Typography>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
//         <Box>
//           <Typography sx={{ m: 1 }} variant='h3'>FirstName </Typography>
//           <Typography sx={{ m: 1 }} variant='h6'>30 y/o </Typography>
//         </Box>
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
//       </Box>

//       <Box sx={{ p: 1 }}>
//         <Typography sx={{ m: 1 }}>Rating average: 5</Typography>
//         <Typography sx={{ m: 1 }}>Giddy-upper status: Platinum</Typography>
//       </Box>

//       <Box sx={{ p: 1 }}>
//         <Typography sx={{ m: 1 }} variant='h5'>FirstName has a fully/partially verified profile</Typography>
//         <Typography sx={{ m: 1 }}><VerifiedUserIcon color='success' sx={{ verticalAlign: 'middle' }} /> Email verified</Typography>
//         <Typography sx={{ m: 1 }}><VerifiedUserIcon color='success' sx={{ verticalAlign: 'middle' }} /> License confirmed</Typography>
//         <Typography sx={{ m: 1 }}><VerifiedUserIcon color='success' sx={{ verticalAlign: 'middle' }} /> Phone number confirmed</Typography>
//       </Box>

//       <Box sx={{ p: 1 }}>
//         <Typography sx={{ margin: 1 }} variant='h5'>About FirstName</Typography>
//         <Typography sx={{ m: 1 }}>"I love chocolate"</Typography>
//         <Typography sx={{ m: 1 }}>Preferences: music</Typography>
//       </Box>

//       <Box sx={{ p: 1 }}>
//         <Typography sx={{ m: 1 }} variant='h5'>FirstName's GiddyUp Activity</Typography>
//         <Typography sx={{ m: 1 }}>Rides offered: X </Typography>
//         <Typography sx={{ m: 1 }}>Rides taken: X</Typography>
//         <Typography sx={{ m: 1 }}>Last ride: DATE</Typography>

//       </Box>
//     </Container>
//   );
// };
// export default UserProfile;
