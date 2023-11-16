import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SvgIconChildren from './SvgIconChildren';
import { Link } from 'react-router-dom';
import brandBannerMobile from '../assets/images/brandBannerMobile.png'
import brandBannerDesktop from '../assets/images/brandBannerDesktop.png'
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountCircle } from '@mui/icons-material';
import { Divider } from '@mui/material';

const settings = [<Link key='userProfileLink890' to='./UserProfile'>Your Profile</Link>,
  'Account',
<Link key='dashboardLink890' to='./Dashboard'>Dashboard</Link>,
  'Logout'];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  }

  // console.log({ isAuthenticated, user, isLoading })
  // console.log({ user })
  const [isMobileView, setIsMobileView] = React.useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
        <Toolbar>

          {isMobileView ? (
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link to='./'>
                <img
                  src={brandBannerMobile}
                  alt="Mobile Logo"
                  style={{
                    maxHeight: 60,
                    maxWidth: 200,
                  }}
                />
              </Link>
            </Typography>
          ) : (
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link to='./'>
                <img
                  src={brandBannerDesktop}
                  alt="Desktop Logo"
                  style={{
                    maxHeight: 60,
                    maxWidth: 350,
                  }}
                />
              </Link>
            </Typography>
          )}
          {isUser ? (
            <Box >
              <IconButton onClick={handleMenu} sx={{ p: 1 }}>
                {isUser && user.picture && user.name ?
                  <Avatar src={user.picture} alt={user.name} /> :
                  <Avatar alt="XNot logged in avatar" src={AccountCircleIcon} />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} sx={{ px: 5 }}> <Avatar src={user.picture} alt={user.name} sx={{ m: 1 }} /> Welcome</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><Link key='dashboardLink890' to='./Dashboard' style={{ textDecoration: 'none', color: '#616161' }}>Dashboard</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='./UserProfile' style={{ textDecoration: 'none', color: '#616161' }}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='./' style={{ textDecoration: 'none', color: '#616161' }}>Home</Link></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>

              </Menu>
            </Box>
          ) : (
            <Button onClick={loginWithRedirect} variant="contained" sx={{ maxWidth: 175 }} >login/sign up</Button>
          )}

        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This helps to offset the AppBar */}
      {/* <Box sx={{ pt: 6 }}> Add padding top here
      </Box> */}
    </Box>
  );
}