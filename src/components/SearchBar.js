import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Button, Typography, Divider } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TripCard from './TripCard'
import authFetch from '../axios/interceptors';


const SearchBar = ({ userId }) => {
  const [trips, setTrips] = useState({
    origin: '',
    destination: '',
    deptDate: ''
  });

  const handleSelectChange = (field, value) => {
    setTrips({ ...trips, [field]: value });
  };

  const handleDateChange = (date) => {
    try {
      const dateObject = new Date(date);
      dateObject.setHours(dateObject.getHours() + 11);
      const iso8601Date = dateObject.toISOString();
      setTrips({ ...trips, deptDate: iso8601Date });
    } catch (error) {
      console.log(error);
    }
  };

  const apiUrl = '/trips/search';
  const [searchedTrips, setSearchedTrips] = useState('');

  const searchRequest = async () => {
    try {
      const { data } = await authFetch(apiUrl, {
        params: trips,
      });
      setSearchedTrips(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const suburbOptions = ['Ballarat', 'Belgrave', 'Melbourne', 'Seddon', 'Yarraville'];

  return (
    <>
      <Box sx={{ py: 3 }}>

        <Typography variant='h3' sx={{ textAlign: 'center', m: 3 }}>Search for a trip</Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', bgcolor: 'white', p: 1.5 }}>
          {['origin', 'destination'].map((field) => (
            <Box key={field} sx={{ minWidth: 230, bgcolor: 'white', padding: '3px' }}>
              <FormControl fullWidth>
                <InputLabel id={`select-label-${field}`}>{field === 'origin' ? 'Origin' : 'Destination'}</InputLabel>
                <Select
                  labelId={`select-label-${field}`}
                  id={`select-${field}`}
                  value={trips[field]}
                  label="Suburb"
                  onChange={(event) => handleSelectChange(field, event.target.value)}
                >
                  {suburbOptions.map((suburb) => (
                    <MenuItem key={suburb} value={suburb}>{suburb}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ))}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ padding: '3px', minWidth: '230px' }} components={['DatePicker']}>
              <DatePicker label="" onChange={handleDateChange} />
            </DemoContainer>
          </LocalizationProvider>
          <Button onClick={searchRequest} variant="contained" sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px', lg: '230px' }, height: '55px' }} > GiddyUP!</Button>
        </Box>
      </Box>

      <Divider />
      {(searchedTrips.status === 'success') && (searchedTrips.results > 0) && <Typography variant='h3' sx={{ my: 3 }}>Search results</Typography>}
      {(searchedTrips.status === 'success') && (searchedTrips.results === 0) && <Typography variant="h5" sx={{ my: 3 }}>Splash! There are no rides {(trips.origin && trips.destination) ? `between ${trips.origin} and ${trips.destination}` : ''} on that date</Typography>}
      {searchedTrips && searchedTrips.data.trips.map((trip, index) => (
        <TripCard key={index} trip={trip} userId={userId} />
      ))}
    </>
  );
};

export default SearchBar;
