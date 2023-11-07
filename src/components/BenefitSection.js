// import { services } from '../data'
// import Title from './Title'
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
import ActionAreaCard from './ActionAreaCard';
import benefit0 from '../assets/images/benefit0.png';
import benefit1 from '../assets/images/benefit1.png';
import benefit2 from '../assets/images/benefit2.png';
import benefit3 from '../assets/images/benefit3.png';



const benefitList = [
  {
    id: 1,
    image: benefit0,
    imgDimension: 200,
    title: 'Doing your bit',
    text: <>
        Increase car occupancy rates while reducing CO
        <sub>2</sub> emissions. Carpooling enables the transport of twice the number of passengers in cars, whilst reducing CO
        <sub>2</sub> emissions by 29%.
      </>
  },
  {
    id: 2,
    image: benefit1,
    imgDimension: 200,
    title: 'It make sense',
    text: "Share costs like petrol, insurance, parking and tolls. With Giddyup, experience the affordability of carpooling, especially crucial in times of rising expenses.",
  },
  {
    id: 3,
    image: benefit2,
    imgDimension: 200,
    title: 'Connect',
    text: "Share enriching experiences on the go. 87% of carpoolers have had enlightening exchanges during their rides either by gaining knowledge, lending an empathetic ear or sharing life experiences.",
  },
  {
    id: 4,
    image: benefit3,
    imgDimension: 200,
    title: 'Celebrate diversity',
    text: "50% of carpoolers find their travel peers more diverse than their usual social circles, opening them up to new networks, cultures and opinions.",
  },

];

const BenefitSection = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Typography variant='h4' align='center'> The Benefits</Typography>
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
