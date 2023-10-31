import React from 'react'
// import BasicSelect from './BasicSelect'
import { Box } from '@mui/material';
// import BasicDatePicker from './BasicDatePicker';
import Button from '@mui/material/Button';
import SearchAllTrips from './SearchAllTrips';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';



const SearchBar = () => {
  const [requestBody, setRequestBody] = React.useState([{
    origin: "",
    destination: "",
    deptDate: ""
  }]);
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const handleOrigin = (event) => {
    const updatedRequestBody = { ...requestBody, origin: event.target.value };
    setRequestBody(updatedRequestBody);
    setOrigin(event.target.value);
  };

  const handleDestination = (event) => {
    const updatedRequestBody = { ...requestBody, destination: event.target.value };
    setRequestBody(updatedRequestBody);
    setDestination(event.target.value);
  };

  const handleDate = (date) => {
    const dateObject = new Date(date);
    dateObject.setHours(dateObject.getHours() - 13);
    const iso8601Date = dateObject.toISOString();
    // console.log(typeof iso8601Date)
    const updatedRequestBody = { ...requestBody, deptDate: iso8601Date };
    // const requestBody = {
    //   origin: "Yarraville",
    //   destination: "Melbourne",
    //   deptDate: "2023-11-26T00:00:00.000Z"
    // };
    setRequestBody(updatedRequestBody);

  }



  // console.log(requestBody);

  const url = 'http://127.0.0.1:5000/api/v1/trips/search';
  const [trips, setTrips] = React.useState('');

  const searchRequest = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
        params: requestBody,
      });
      // console.log(data)
      setTrips(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  try {
    console.log(`Kathryn log: ${trips.data.trips}`);
    const dataList = trips.data.trips;
    console.log(dataList)
  } catch (error) {
    console.log(error.response);
    console.log("hi");
  }



  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', bgcolor: 'white', p: 1.5 }}>
        <Box sx={{ minWidth: 230, bgcolor: 'white', padding: '3px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Origin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={origin}
              label="Suburb"
              onChange={handleOrigin}
            >
              <MenuItem value={'Ballarat'}>Ballarat</MenuItem>
              <MenuItem value={'Belgrave'}>Belgrave</MenuItem>
              <MenuItem value={'Melbourne'}>Melbourne</MenuItem>
              <MenuItem value={'Seddon'}>Seddon</MenuItem>
              <MenuItem value={'Yarraville'}>Yarraville</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <BasicSelect text='Origin' /> */}
        <Box sx={{ minWidth: 230, bgcolor: 'white', padding: '3px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={destination}
              label="Suburb"
              onChange={handleDestination}
            >
              <MenuItem value={'Ballarat'}>Ballarat</MenuItem>
              <MenuItem value={'Belgrave'}>Belgrave</MenuItem>
              <MenuItem value={'Melbourne'}>Melbourne</MenuItem>
              <MenuItem value={'Seddon'}>Seddon</MenuItem>
              <MenuItem value={'Yarraville'}>Yarraville</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <BasicSelect text='Destination' /> */}
        {/* <BasicDatePicker /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ padding: '3px', minWidth: '230px' }} components={['DatePicker']}>
            <DatePicker label="" onChange={handleDate} />
          </DemoContainer>
        </LocalizationProvider>
        <Button onClick={searchRequest} variant="contained" sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px', lg: '230px' }, height: '55px' }} > GiddyUP!</Button>
      </Box>
      <SearchAllTrips />

      {/* {trips.data.trips.map((x) => {
        <ul>
          <li>{trips.name}</li>
          <li>{trips.origin}</li>
          <li>{trips.destination}</li>
          <li>{trips.deptDate}</li>
        </ul >
      })} */}
    </>
  )
}

export default SearchBar;
