import React, { useState } from 'react';

import TransferList from '../components/TransferList';
import Button from '@mui/material/Button';
import HoverRating from '../components/HoverRating';
import CircularButton from '../components/CircularIntegration';

export default function Rate() {
    const [showFavorites, setShowFavorites] = useState(false);
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

    const handleDone = () => {
        setShowFavorites(true);
        setFavoriteRestaurants(TransferList.getFavorites());
    };

    return (
        <>
            {showFavorites ? (
                <div className="favorite-restaurants-container">
                    <h2>Rate Your Favorite Restaurants:</h2>
                    <ul className="favorite-restaurants-list">
                        {favoriteRestaurants.map((restaurant, index) => (
                            <li key={index} className="favorite-restaurant-item">
                                <span className="restaurant-name">{restaurant}</span>
                                <HoverRating className="restaurant-rating" />
                            </li>
                        ))}
                    </ul>
                    <CircularButton/>
                </div>
            ) : (
                <div className="favorite-restaurants-container">
                    <TransferList />
                    <Button onClick={handleDone} sx={{ my: 0.5, bgcolor: '#007bff', color: 'white', '&:hover': { bgcolor: '#0056b3' } }} variant="outlined" size="small" aria-label="move selected left">Done</Button>
                </div>
            )}
        </>
    );
}
