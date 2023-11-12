import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, text, imgDimension }) {
  return (
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
            {text}
          </Typography> */}
      </CardContent>
      <CardActionArea sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height={imgDimension}
          image={image}
          alt="infographic"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}