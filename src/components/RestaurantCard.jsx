import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const generateAvatarColor = (char) => {
  const charCode = char.charCodeAt(0);
  const colorCode = (charCode % 26) + 1;
  return `rgb(${colorCode * 10}, ${(colorCode * 20) % 256}, ${(colorCode * 30) % 256})`;
};

const RestaurantCard = ({ restaurant }) => {
  const firstLetter = restaurant.name.charAt(0).toUpperCase();
  const avatarColor = generateAvatarColor(firstLetter);
  
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: avatarColor }} aria-label="restaurant">{firstLetter}</Avatar>}
        title={restaurant.name}
        subheader={restaurant.date}
      />
      <CardMedia component="img" height="194" image={restaurant.image} alt="Restaurant dish"/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">{restaurant.description}</Typography>
      </CardContent>
      <Button href={restaurant.url} style={{ marginBottom: 6 }} variant="contained" color="success" endIcon={<BorderColorOutlinedIcon />}>Book</Button>
    </Card>
  );
};

export default RestaurantCard;
