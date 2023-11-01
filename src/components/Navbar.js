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
import brandBanner from '../assets/images/brandBanner.png'
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const settings = [<Link key='userProfileLink890' to='./UserProfile'>Your Profile</Link>,
  'Account',
<Link key='dashboardLink890' to='./Dashboard'>Dashboard</Link>,
  'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log({ isAuthenticated, user, isLoading })
  const isUser = isAuthenticated && user;
  console.log({ user })

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters={false} sx={{ justifyContent: 'space-between' }}>
          <SvgIconChildren cssProps={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 200,
                maxHeight: { xs: 50, md: 50 },
                maxWidth: { xs: 200, md: 200 },
              }}
              alt="Giddy up in custom font"
              src={brandBanner}
            />
          </Typography>
          <SvgIconChildren cssProps={{
            display: { xs: 'flex', sm: 'none', md: 'none' }, mr: 1 // change xs: 'none' to 'flex' to make banner visable on small screen
          }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'none', md: 'none' }, // change xs: 'none' to 'flex' to make banner visable on small screen
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 200,
                maxHeight: { xs: 50, md: 50 },
                maxWidth: { xs: 200, md: 200 },
              }}
              alt="Giddy up in custom font"
              src={brandBanner}
            />
          </Typography>

          {isUser ? (
            <Button onClick={() => {
              logout({
                returnTo: window.location.origin
              })
            }} variant="contained" >logout</Button>
          ) : (
            <Button onClick={loginWithRedirect} variant="contained" >login</Button>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                {isUser && user.picture && user.name ?
                  <Avatar src={user.picture} alt={user.name} /> :
                  <Avatar alt="XNot logged in avatar" src={AccountCircleIcon} />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={`setting_${index}`} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default NavBar;
