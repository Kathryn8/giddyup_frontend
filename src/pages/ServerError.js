import React from 'react'
import { Typography, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const ServerError = () => {
  return (
    <Container sx={{ p: 4, minHeight: '50vh' }}>
      <Typography variant='h2'>There was an error...</Typography>,
      <Typography variant='h4'>Have you tried: </Typography>
      <List >
        <ListItem>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText>Turning on backend server?</ListItemText>
        </ListItem>,
        <ListItem>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText>Refreshing the page?</ListItemText>
        </ListItem>,
        <ListItem>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText>Waiting for backend to spin up because it's a sleepy head?</ListItemText>
        </ListItem>,
        <ListItem>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText>Upgrade your back end hosting service?</ListItemText>
        </ListItem>,
        <ListItem>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText>Praying to God?</ListItemText>
        </ListItem>,
      </List>
    </Container>
  )
}

export default ServerError