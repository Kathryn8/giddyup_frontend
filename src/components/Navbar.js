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
import brandBanner from '../assets/images/brandBannerLogo.png'
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

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <Toolbar>

          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Link to='./'>
              <Box
                component="img"
                sx={{
                  // height: 33,
                  // width: 200,
                  maxHeight: { xs: 60, md: 60 },
                  maxWidth: { xs: 200, md: 350 },
                }}
                alt="Giddy up in custom font"
                src={brandBanner}
              />
            </Link>
          </Typography>
          {isUser ? (
            <div>
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
                <MenuItem onClick={handleClose} > <Avatar src={user.picture} alt={user.name} sx={{ m: 1 }} /> Welcome, FirstName</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><Link key='dashboardLink890' to='./Dashboard'>Dashboard</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='./UserProfile'>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='./'>Home</Link></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>

              </Menu>
            </div>
          ) : (
            <Button onClick={loginWithRedirect} variant="contained" >login / sign up</Button>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}