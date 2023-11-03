import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
// import BookingButton from './BookingButton';
import TripCard from './TripCard'

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
    const dateObject = new Date(date);
    dateObject.setHours(dateObject.getHours() - 13);
    const iso8601Date = dateObject.toISOString();
    setTrips({ ...trips, deptDate: iso8601Date });
  };

  const apiUrl = 'http://127.0.0.1:5000/api/v1/trips/search';
  const [searchedTrips, setSearchedTrips] = useState('');

  const searchRequest = async () => {
    try {
      const { data } = await axios.get(apiUrl, {
        headers: {
          Accept: 'application/json',
        },
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
      <div>
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
        {/* <BookingButton tripId='65390389168ea9d1620f988b' passengerId='65388a9f6b835a3128e2d24c' /> */}
      </div>
      {searchedTrips && searchedTrips.data.trips.map((trip, index) => (
        <TripCard key={index} trip={trip} userId={userId} />
      ))}
    </>
  );
};

export default SearchBar;
