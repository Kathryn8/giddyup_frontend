import React from 'react'
import BasicSelect from './BasicSelect'
import { Box } from '@mui/material';
import BasicDatePicker from './BasicDatePicker';
import Button from '@mui/material/Button';


const SearchBar = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', bgcolor: 'white', p: 1.5 }}>
        <BasicSelect text='Origin' />
        <BasicSelect text='Destination' />
        <BasicDatePicker />
        <Button variant="contained" sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px', lg: '230px' }, height: '55px' }} > GiddyUP!</Button>
      </Box>
    </div >
  )
}

export default SearchBar;
