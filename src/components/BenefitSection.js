// import { services } from '../data'
// import Title from './Title'
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import benefit0 from '../assets/images/love-environment.png';
import benefit1 from '../assets/images/save-money.png';
import benefit2 from '../assets/images/connect.png';
import benefit3 from '../assets/images/diversity.png';



const benefitList = [
  {
    id: 1,
    image: benefit0,
    imgDimension: 200,
    title: 'Doing your bit',
    text: <>
      Increase car occupancy rates, ease congestion and track your CO
      <sub>2</sub> footprint. You can make a difference!
    </>
  },
  {
    id: 2,
    image: benefit1,
    imgDimension: 200,
    title: 'It makes sense',
    text: "Share costs like petrol, insurance, parking and tolls. Every bit counts in times of rising expenses.",
  },
  {
    id: 3,
    image: benefit2,
    imgDimension: 200,
    title: 'Connect',
    text: "Did you know 87% of Giddy-uppers have had enlightening conversations during their rides? ",
  },
  {
    id: 4,
    image: benefit3,
    imgDimension: 200,
    title: 'Stronger together',
    text: "50% of Giddy-uppers find their travel peers more diverse than their usual social circles. Say yes to meeting new coworkers and expand your network.",
  },

];

const BenefitSection = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Typography variant='h3' align='center'> Your benefits</Typography>
      <Typography variant= 'subtitle1' align='center' sx={{ py: 1 }}> 22% of Giddyup drivers reduce their speed when carpooling. 35% of drivers check their tire pressure more often. Both these actions also reduce emissions. Fewer cars on the road means a lower likelihood of accidents.</Typography>
      <Box sx={{
        pt: 4,
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {benefitList.map((item) => {
          return (
            <ActionAreaCard {...item} key={item.id} />
          )
        })}
      </Box>
    </Container>
  )
}
export default BenefitSection
