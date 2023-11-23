import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Button, Typography, Divider, CircularProgress } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TripCard from './TripCard';
import authFetch from '../axios/interceptors';

const suburbOptions = ['Abbotsford', 'Aberfeldie', 'Airport West', 'Albanvale', 'Albert Park', 'Albion', 'Alphington', 'Altona', 'Altona Meadows', 'Altona North', 'Ardeer', 'Armadale', 'Ascot Vale', 'Ashburton', 'Ashwood', 'Aspendale', 'Aspendale Gardens', 'Attwood', 'Avondale Heights', 'Balaclava', 'Balwyn', 'Balwyn North', 'Bangholme', 'Beaconsfield', 'Beaumaris', 'Belgrave', 'Belgrave Heights', 'Belgrave South', 'Bellfield', 'Bend of Islands', 'Bentleigh', 'Bentleigh East', 'Berwick', 'Bittern', 'Black Rock', 'Blackburn', 'Blackburn North', 'Blackburn South', 'Blairgowrie', 'Bonbeach', 'Boronia', 'Box Hill', 'Box Hill North', 'Box Hill South', 'Braeside', 'Braybrook', 'Briar Hill', 'Brighton', 'Brighton East', 'Broadmeadows', 'Brookfield', 'Brooklyn', 'Brunswick', 'Brunswick East', 'Brunswick West', 'Bulla', 'Bulleen', 'Bundoora', 'Burnley', 'Burnside', 'Burnside Heights', 'Burwood', 'Burwood East', 'Cairnlea', 'Calder Park', 'Camberwell', 'Campbellfield', 'Canterbury', 'Carlton', 'Carlton North', 'Carnegie', 'Caroline Springs', 'Carrum', 'Carrum Downs', 'Caulfield', 'Caulfield East', 'Caulfield North', 'Caulfield South', 'Chadstone', 'Chelsea', 'Chelsea Heights', 'Cheltenham', 'Chirnside Park', 'Christmas Hills', 'Cheltenham', 'Clarinda', 'Clayton', 'Clayton South', 'Clifton Hill', 'Coburg', 'Coburg North', 'Cocoroc', 'Coldstream', 'Collingwood', 'Coolaroo', 'Coonans Hill', 'Craigieburn', 'Cranbourne', 'Cremorne', 'Croydon', 'Croydon Hills', 'Croydon North', 'Croydon South', 'Dallas', 'Dandenong', 'Dandenong North', 'Dandenong South', 'Deepdene', 'Deer Park', 'Delahey', 'Derrimut', 'Devon Meadows', 'Diamond Creek', 'Diggers Rest', 'Dingley Village', 'Docklands', 'Doncaster', 'Doncaster East', 'Donvale', 'Doveton', 'Eaglemont', 'East Melbourne', 'Edithvale', 'Elsternwick', 'Eltham', 'Eltham North', 'Elwood', 'Emerald', 'Endeavour Hills', 'Epping', 'Essendon', 'Essendon Fields', 'Essendon North', 'Essendon West', 'Fairfield', 'Fawkner', 'Ferntree Gully', 'Ferny Creek', 'Fitzroy', 'Fitzroy North', 'Flemington', 'Footscray', 'Forest Hill', 'Frankston', 'Frankston North', 'Frankston South', 'Gardenvale', 'Gladstone Park', 'Glen Huntly', 'Glen Iris', 'Glen Waverley', 'Glenroy', 'Gowanbrae', 'Greensborough', 'Greenvale', 'Hadfield', 'Hallam', 'Hampton', 'Hampton East', 'Hampton Park', 'Harkaway', 'Hawthorn', 'Hawthorn East', 'Heatherton', 'Heathmont', 'Heidelberg', 'Heidelberg Heights', 'Heidelberg West', 'Highett', 'Hillside', 'Hoppers Crossing', 'Houston', 'Hughesdale', 'Huntingdale', 'Hurstbridge', 'Ivanhoe', 'Ivanhoe East', 'Jacana', 'Junction Village', 'Kallista', 'Kalorama', 'Kealba', 'Keilor', 'Keilor Downs', 'Keilor East', 'Keilor Lodge', 'Keilor North', 'Keilor Park', 'Kensington', 'Kerrimuir', 'Kew', 'Kew East', 'Keysborough', 'Kilsyth', 'Kilsyth South', 'Kings Park', 'Kingsbury', 'Kingsville', 'Knoxfield', 'Kooyong', 'Kurunjang', 'Laburnum', 'Lalor', 'Langwarrin', 'Langwarrin South', 'Laverton', 'Laverton North', 'Lilydale', 'Lower Plenty', 'Lynbrook', 'Lyndhurst', 'Lysterfield', 'Lysterfield South', 'Macclesfield', 'Maidstone', 'Malvern', 'Malvern East', 'Maribyrnong', 'McKinnon', 'Meadow Heights', 'Melbourne', 'Mentone', 'Mernda', 'Mickleham', 'Middle Park', 'Mill Park', 'Mitcham', 'Monbulk', 'Mont Albert', 'Mont Albert North', 'Montmorency', 'Montrose', 'Moonee Ponds', 'Moorabbin', 'Moorabbin Airport', 'Mooroolbark', 'Mordialloc', 'Mount Dandenong', 'Mount Evelyn', 'Mount Waverley', 'Mulgrave', 'Murrumbeena', 'Nangana', 'Narre Warren', 'Narre Warren East', 'Narre Warren North', 'Narre Warren South', 'Newport', 'Niddrie', 'Noble Park', 'Noble Park North', 'North Melbourne', 'North Warrandyte', 'Northcote', 'Notting Hill', 'Nunawading', 'Oak Park', 'Oaklands Junction', 'Oakleigh', 'Oakleigh East', 'Oakleigh South', 'Officer', 'Olinda', 'Ormond', 'Pakenham', 'Panton Hill', 'Park Orchards', 'Parkdale', 'Parkville', 'Pascoe Vale', 'Pascoe Vale South', 'Patterson Lakes', 'Plenty', 'Plumpton', 'Point Cook', 'Point Leo', 'Port Melbourne', 'Prahran', 'Preston', 'Princes Hill', 'Ravenhall', 'Red Hill', 'Research', 'Reservoir', 'Richmond', 'Ringwood', 'Ringwood East', 'Ringwood North', 'Ripponlea', 'Rockbank', 'Rosanna', 'Rosebud', 'Rosebud West', 'Rowville', 'Roxburgh Park', 'Sandhurst', 'Sandringham', 'Sassafras', 'Scoresby', 'Seabrook', 'Seaford', 'Seaholme', 'Seddon', 'Selby', 'Seville', 'Sherbrooke', 'Shoreham', 'Silvan', 'Skye', 'Smiths Gully', 'Somerton', 'Sorrento', 'South Kingsville', 'South Melbourne', 'South Morang', 'South Wharf', 'South Yarra', 'Southbank', 'Spotswood', 'Springvale', 'Springvale South', 'St Albans', 'St Andrews', 'St Helena', 'St Kilda', 'St Kilda East', 'St Kilda West', 'Strathmore', 'Strathmore Heights', 'Sunbury', 'Sunshine', 'Sunshine North', 'Sunshine West', 'Surrey Hills', 'Sydenham', 'Tally Ho', 'Tarneit', 'Taylors Hill', 'Taylors Lakes', 'Tecoma', 'Templestowe', 'Templestowe Lower', 'The Basin', 'Thomastown', 'Thornbury', 'Tooradin', 'Toorak', 'Tottenham', 'Travancore', 'Tremont', 'Truganina', 'Tullamarine', 'Tyabb', 'Tynong', 'Upper Ferntree Gully', 'Upwey', 'Vermont', 'Vermont South', 'Viewbank', 'Wandin East', 'Wandin North', 'Wantirna', 'Wantirna South', 'Warneet', 'Warrandyte', 'Warrandyte South', 'Warranwood', 'Waterways', 'Watsonia', 'Watsonia North', 'Wattle Glen', 'Werribee', 'Werribee South', 'West Melbourne', 'Westmeadows', 'Wheelers Hill', 'Wildwood', 'Williams Landing', 'Williamstown', 'Williamstown North', 'Windsor', 'Wonga Park', 'Wyndham Vale', 'Yallambie', 'Yarrambat', 'Yarraville', 'Yuroke'];

const SearchBar = ({ userId }) => {
  const [trips, setTrips] = React.useState({
    origin: '',
    destination: '',
    deptDate: ''
  });

  const [loading, setLoading] = React.useState(false);

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
  const [searchedTrips, setSearchedTrips] = React.useState(null);

  const searchRequest = async () => {
    try {
      setLoading(true);
      const { data } = await authFetch(apiUrl, {
        params: trips,
      });
      setSearchedTrips(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError && !error.response) {
        setSearchedTrips({
          status: 'error',
          message: 'You are currently offline. Please check your internet connection and try again.',
        });
      } else if (error.response) {
        setSearchedTrips({
          status: 'fail',
          message: `Splash! There are no rides ${trips.origin && trips.destination
            ? `between ${trips.origin} and ${trips.destination}`
            : ''
            } on ${trips.deptDate ? new Date(trips.deptDate).toLocaleDateString() : ''}`,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
  }, [searchRequest]);



  return (
    <>
      <Box sx={{ py: 3 }}>

        <Typography variant="h3" sx={{ textAlign: 'center', m: 3 }}>Search for a trip</Typography>

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
          <Button
            onClick={searchRequest}
            variant="contained"
            sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px', lg: '230px' }, height: '55px' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="secondary" /> : 'GiddyUP!'}
          </Button>
        </Box>
      </Box>

      <Divider />
      {searchedTrips && (
        <>
          <Typography variant="h4" sx={{ my: 3 }}>{searchedTrips.message}</Typography>
          {searchedTrips.status === 'success' && searchedTrips.results > 0 && (
            <>
              <Typography variant="h3" sx={{ my: 3 }}>
                Search {searchedTrips.results !== 1 ? 'results' : 'result'} {searchedTrips.results} {searchedTrips.results !== 1 ? 'trips' : 'trip'} found
              </Typography>
              {searchedTrips.data.trips.map((trip, index) => (
                <TripCard key={index} trip={trip} userId={userId} />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchBar;
