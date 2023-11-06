import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import LogoAboveBrand from '../assets/images/logoAboveBrand.png';

// ... (other constants and components like Copyright and LANGUAGES)
function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://giddyup.onrender.com/">
        GiddyUP!
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

const defaultInstagram = 'https://www.instagram.com/holbertonaus/';
const defaultFacebook = 'https://www.facebook.com/HolbertonSchoolAustralia';

const authorContact = [
  {
    name: 'Bryce',
    id: 1,
    avatar: 'https://avatars.githubusercontent.com/u/124347057?v=4',
    linkedin: 'https://www.linkedin.com/in/bryceknight16/',
    github: 'https://github.com/BryceKnight16',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Eva',
    id: 2,
    avatar: 'https://avatars.githubusercontent.com/u/124496441?v=4',
    linkedin: 'https://www.linkedin.com/in/eva-m-a3405073/',
    github: 'https://github.com/EvaMicich',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Bryan',
    id: 3,
    avatar: 'https://avatars.githubusercontent.com/u/124537848?v=4',
    linkedin: 'https://www.linkedin.com/in/bryan-f-231b78162/',
    github: 'https://github.com/BryanField15',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Kathryn',
    id: 4,
    avatar: 'https://avatars.githubusercontent.com/u/124414205?v=4',
    linkedin: 'https://www.linkedin.com/in/kathryn-kelly-7b10b3243/',
    github: 'https://github.com/Kathryn8',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  }
]

function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{
        display: 'flex',
        bgcolor: 'rgba(242, 193, 51, 0.5)'
      }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={6} md={2}>
            <Grid item sx={{ display: 'flex' }}>
              <img src={LogoAboveBrand} alt="Step 1" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6} md={2}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <LogoAboveBrand width={50} height={50} />
              </Grid> */}

              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <FacebookIcon />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                  <TwitterIcon />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom>
              Contact
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Phone: +61 44GIDDYUP</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Email: yee.ha@giddyup.com</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

function OriginalFooter() {
  const [anchorElAuthors, setAnchorElAuthors] = React.useState({});

  const handleOpenAuthorMenu = (authorId, event) => {
    setAnchorElAuthors((prevAnchorElAuthors) => ({
      ...prevAnchorElAuthors,
      [authorId]: event.currentTarget,
    }));
  };

  const handleCloseAuthorMenu = (authorId) => {
    setAnchorElAuthors((prevAnchorElAuthors) => {
      const updatedAnchors = { ...prevAnchorElAuthors };
      delete updatedAnchors[authorId];
      return updatedAnchors;
    });
  };

  return (
    <>
      <AppBar position="static" sx={{ display: { sm: 'none' } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography sx={{ display: { sm: 'none' }, bgcolor: 'rgba(242, 193, 51, 0.5)' }}><span >Made with <span role="img" aria-label="loveHeart" style={{ color: 'red' }}>♥️</span> in Melbourne Australia 2023 by</span></Typography>

          </Toolbar>
        </Container>
      </AppBar>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}><span >Made with <span role="img" aria-label="loveHeart" style={{ color: 'red' }}>♥️</span> in Melbourne Australia 2023 by</span></Typography>
            {authorContact.map((author) => (
              <Box key={author.id} sx={{ flexGrow: 0, p: 1 }}>
                <Tooltip title="Open authorMenu">
                  <IconButton onClick={(event) => handleOpenAuthorMenu(author.id, event)} sx={{ p: 1 }}>
                    <Avatar alt={author.name} src={author.avatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '-45px' }}
                  id={`menu-appbar-${author.id}`}
                  anchorEl={anchorElAuthors[author.id]}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElAuthors[author.id])}
                  onClose={() => handleCloseAuthorMenu(author.id)}
                >
                  <MenuItem onClick={() => handleCloseAuthorMenu(author.id)} sx={{ flexDirection: 'column' }}>
                    <Typography textAlign="center"><a target="_blank" rel="noopener noreferrer" href={author.linkedin} aria-label={`Visit ${author.name}'s LinkedIn profile`}><LinkedInIcon /></a></Typography>
                    <Typography textAlign="center"><a target="_blank" rel="noopener noreferrer" href={author.github} aria-label={`Visit ${author.name}'s GitHub profile`}><GitHubIcon /></a></Typography>
                    <Typography textAlign="center"><a target="_blank" rel="noopener noreferrer" href={author.instagram} aria-label={`Visit ${author.name}'s Instagram profile`}><InstagramIcon /></a></Typography>
                    <Typography textAlign="center"><a target="_blank" rel="noopener noreferrer" href={author.facebook} aria-label={`Visit ${author.name}'s FaceBook profile`}><FacebookIcon /></a></Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}



function CombinedFooter() {
  return (
    <div>
      <AppFooter />
      <OriginalFooter />
    </div>
  );
}

export default CombinedFooter;
