import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText, Button, Card } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ControlledCarousel from '../components/Carousel';

export default function Cities() {
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setUsername(loggedInUser);
    }
  }, []);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleContinue = () => {
    if (city) {
      navigate(`/restaurants/${city}`);
    }
  };

  return (
    <div id="cities-container" style={{ display: 'flex' }}>
      <div id="form-container" style={{ marginRight: '50px' }}>
        <h1 id="city-title">Let's pick {username}'s favorite city</h1>
        <Card id="form-card">
          <h1 id="select-city-title">Select City</h1>
          <FormControl required style={{ width: '100%' }}>
            <InputLabel id="city-label" style={{ color: 'white' }}>City</InputLabel>
            <Select labelId="city-label" value={city} onChange={handleChange} style={{ color: 'white' }}>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={"Amsterdam"}>Amsterdam</MenuItem>
              <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
              <MenuItem value={"Kitzbühel"}>Kitzbühel</MenuItem>
              <MenuItem value={"London"}>London</MenuItem>
              <MenuItem value={"Milano"}>Milano</MenuItem>
              <MenuItem value={"München"}>München</MenuItem>
              <MenuItem value={"Paris"}>Paris</MenuItem>
              <MenuItem value={"Rome"}>Rome</MenuItem>
              <MenuItem value={"Stockholm"}>Stockholm</MenuItem>
              <MenuItem value={"Vienna"}>Vienna</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'white' }}>Required</FormHelperText>
          </FormControl>
          <hr id="form-divider" />
          <Button onClick={handleContinue} variant="contained" endIcon={<LunchDiningIcon />} id="continue-button">Continue</Button>
        </Card>
      </div>
      <div style={{ marginLeft: '170px' }}><ControlledCarousel /></div>
    </div>
  )
}