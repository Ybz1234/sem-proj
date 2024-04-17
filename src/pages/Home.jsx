import React from 'react';
import { useNavigate } from 'react-router-dom';

import PhotoAlbum from "react-photo-album";
import { Button } from '@mui/material';
import Dining from '@mui/icons-material/DiningSharp';

const photos = [
    { src: "it1.jpg", width: 800, height: 600 },
    { src: "it2.jpg", width: 1600, height: 900 },
    { src: "vienna.jpeg", width: 1600, height: 900 }
];

export default function Home() {
    const navigate = useNavigate();
    const go2SignUp = () => {
        navigate('/SignUp');
    };

    return (
        <div id="home-container">
            <div>
                <h1>Welcome to EaTravel!</h1>
                <p style={{ fontFamily: 'Caveat, cursive', color: 'white'}}>EaTravel is your go-to guide for culinary adventures, providing an extensive collection of restaurant recommendations curated for each city. Explore diverse gastronomic delights, from hidden gems to renowned eateries, and savor the unique flavors that each city has to offer.</p>
                <Button onClick={go2SignUp} variant="outlined" endIcon={<Dining />} style={{ color: 'white', backgroundColor: 'black' }}>Start your journey</Button>
            </div>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    );
}
