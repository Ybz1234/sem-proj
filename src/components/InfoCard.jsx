import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function InfoCard({ title, description, image }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, maxHeight: 430 }}>
        <CardMedia component="img" height="140" image={image} alt={title}onClick={handleOpen}style={{ cursor: 'pointer' }}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent><DialogContentText><img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%' }}/></DialogContentText></DialogContent>
      </Dialog>
    </>
  );
}
