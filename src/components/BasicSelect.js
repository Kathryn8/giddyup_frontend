import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect({ text }) {
  const [suburb, setSuburb] = React.useState('');

  const handleChange = (event) => {
    setSuburb(event.target.value);
    console.log(`suburb: ${event.target.value}`);
  };

  return (
    <Box sx={{ minWidth: 230, bgcolor: 'white', padding: '3px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={suburb}
          label="Suburb"
          onChange={handleChange}
        >
          <MenuItem value={'Ballarat'}>Ballarat</MenuItem>
          <MenuItem value={'Belgrave'}>Belgrave</MenuItem>
          <MenuItem value={'Seddon'}>Seddon</MenuItem>
          <MenuItem value={'Yarraville'}>Yarraville</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
