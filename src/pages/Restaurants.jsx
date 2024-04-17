import React from 'react';

import { useParams } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

export default function Restaurants() {
  const { city } = useParams();

  const restaurantsData = [
    {
      city: "Amsterdam",
      name: "Rijksmuseum",
      date: "September 14, 2016",
      image: "/ams1.jpg",
      description: "Rijksmuseum Restaurant is a fine-dining restaurant located inside the Rijksmuseum, offering beautiful views of the museum's collection. It serves modern Dutch cuisine with a focus on seasonal ingredients.",
      url: "https://www.rijksmuseum.nl/en/visit/practical-info/rijks-restaurant"
    },
    {
      city: "Amsterdam",
      name: "De Kas",
      date: "October 20, 2016",
      image: "/ams2.jpg",
      description: "De Kas is a Michelin-starred restaurant located in a former greenhouse. It serves seasonal French cuisine with a focus on local ingredients.",
      url: "https://restaurantdekas.com/eng/reservations-"
    },
    {
      city: "Barcelona",
      name: "Lasarte ",
      date: "November 5, 2016",
      image: "/bar1.jpg",
      description: "Lasarte is a Michelin-starred restaurant serving Basque cuisine in an elegant setting.",
      url: "https://www.monumenthotel.com/en/lasarte-restaurant-barcelona-3-michelin/?gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx2rySNilmatDgyAXjp1GRD8Z6yCI8rJViTDC-kXKUXuboPqCPbZ54hoC0FcQAvD_BwE"
    },
    {
      city: "Barcelona",
      name: "Tickets",
      date: "September 14, 2016",
      image: "/bar2.jpg",
      description: "Tickets is a casual tapas bar from the same team behind Lasarte. It offers a creative and innovative take on traditional tapas.",
      url: "https://www.barcelonasolutions.com/venues/tickets-restaurant-barcelona/"
    },
    {
      city: "Kitzbühel",
      name: "Rosi's Sonnbergstuben",
      date: "October 20, 2016",
      image: "/kit2.jpg",
      description: "Rosi's Sonnbergstuben is another traditional Austrian restaurant serving classic dishes with stunning views of the Kitzbühel Alps.",
      url: "https://www.sonnbergstuben.at/de/restaurant-kitzbuehel/"
    },
    {
      city: "Kitzbühel",
      name: "Huberwirt",
      date: "November 5, 2016",
      image: "/kit1.jpg",
      description: "Huberwirt is a traditional Austrian restaurant serving Tyrolean specialties.",
      url: "https://www.hotel-viehhofen.com/en/restaurant-oberwirt"
    },
    {
      city: "London",
      name: "The Fat Duck",
      date: "September 14, 2016",
      image: "/ldn1.jpg",
      description: "The Fat Duck is a Michelin-three-starred restaurant known for its innovative and experimental tasting menus.",
      url: "https://www.sevenrooms.com/reservations/thefatduck"
    },
    {
      city: "London",
      name: "Alain Ducasse at the Dorchester",
      date: "October 20, 2016",
      image: "/ldn2.jpeg",
      description: "Alain Ducasse at the Dorchester is a Michelin-two-starred restaurant serving modern French cuisine in a luxurious setting.",
      url: "https://www.dorchestercollection.com/london/the-dorchester/dining/alain-ducasse-at-the-dorchester"
    },
    {
      city: "Milano",
      name: "Il Pescatore",
      date: "November 5, 2016",
      image: "/mil1.jpg",
      description: "Il Pescatore is a Michelin-three-starred seafood restaurant.",
      url: "https://dishcult.com/restaurant/ilpescatore?sortOrder=0&page=1&bookingDate=2024-03-26&covers=2&promotionId=0"
    },
    {
      city: "Milano",
      name: "Cracco",
      date: "September 14, 2016",
      image: "/mil2.jpg",
      description: "Cracco is a Michelin-two-starred restaurant serving modern Italian cuisine.",
      url: "https://www.sevenrooms.com/reservations/ristorantecracco?lang=en"
    },
    {
      city: "München",
      name: "Tantris",
      date: "October 20, 2016",
      image: "/mun1.jpg",
      description: "Tantris is a Michelin-two-starred restaurant serving modern Bavarian cuisine.",
      url: "https://tantris.de/en/"
    },
    {
      city: "München",
      name: "Schuhbeck",
      date: "November 5, 2016",
      image: "/mun2.jpg",
      description: "Schuhbeck is a Michelin-starred restaurant serving traditional Bavarian cuisine with a modern twist.",
      url: "https://www.schuhbeck.de/pages/suedtiroler-stuben"
    },
    {
      city: "Paris",
      name: "Guy Savoy",
      date: "September 14, 2016",
      image: "/par1.jpg",
      description: "Guy Savoy is a Michelin-three-starred restaurant serving modern French cuisine.",
      url: "https://www.guysavoy.com/reservation/new"
    },
    {
      city: "Paris",
      name: "Le Cinq",
      date: "October 20, 2016",
      image: "/par2.jpg",
      description: "Le Cinq is a Michelin-three-starred restaurant located inside the George V hotel. It serves classic French cuisine.",
      url: "https://to-restaurant.com/en/?gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx7yVW-so49ik2I1aoi-oOZHyXLh04epXaixb8NteGqfCPkYNcuYhTBoCvIAQAvD_BwE"
    },
    {
      city: "Rome",
      name: "La Pergola",
      date: "November 5, 2016",
      image: "/rom1.jpg",
      description: "La Pergola is a Michelin-three-starred restaurant serving modern Italian cuisine with a focus on seasonal ingredients.",
      url: "https://www.sevenrooms.com/reservations/lapergola"
    },
    {
      city: "Rome",
      name: "Il Margutta",
      date: "September 14, 2016",
      image: "/rom2.jpg",
      description: "Il Margutta is a Michelin-two-starred restaurant serving traditional Roman cuisine with a modern twist.",
      url: "https://www.ristoranteghiaccio.it/en/?gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx3eXLBlxFmDNO0DCwkFlFerOUWhM7oib-5omsP2KDvDjqdQ1XNLOoBoCH8UQAvD_BwE"
    },
    {
      city: "Stockholm",
      name: "Frantzén",
      date: "October 20, 2016",
      image: "/sto1.jpg",
      description: "Frantzén is a Michelin-three-starred restaurant serving tasting menus that change seasonally.",
      url: "https://tableelite.com/cities/stockholm-gourmet-restaurants/frantzen-stockholm-reservation/"
    },
    {
      city: "Stockholm",
      name: "Ekstedt",
      date: "November 5, 2016",
      image: "/sto2.jpg",
      description: "Ekstedt is a Michelin-two-starred restaurant serving modern Swedish cuisine with a focus on seafood.",
      url: "https://ekstedt.nu/reservation"
    },
    {
      city: "Vienna",
      name: "Steirereck",
      date: "October 20, 2016",
      image: "/vie1.jpg",
      description: "Steirereck is a Michelin-two-starred restaurant serving modern Austrian cuisine with a focus on seasonal ingredients.",
      url: "https://thell.restaurant/en/booking/?gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx2R6SrYaU0LERd3LTUTCVw1eUsluNbTZ7zoFZ89veIdCTB5t4GrGjhoCcv8QAvD_BwE"
    },
    {
      city: "Vienna",
      name: "Thell",
      date: "November 5, 1973",
      image: "/vie2.jpg",
      description: "The Thell restaurant in Vienna offers a delectable fusion of traditional Austrian cuisine with innovative twists, tantalizing patrons with its exquisite flavors and elegant ambiance.",
      url: "https://thell.restaurant/en/?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppHBdZGv1RFXGNzaj7ZPE_oh4O_5dujibSXxQ80j5TtYMXN8WEnmbPxoCY-oQAvD_BwE"
    }
  ];

  const cityRestaurants = restaurantsData.filter(restaurant => restaurant.city === city);

  const getBackgroundImage = (city) => {
    switch (city) {
      case "Amsterdam":
        return "/netherlandsFlag.png";
      case "Barcelona":
        return "/spainFlag.png";
      case "Kitzbühel":
        return "/austriaFlag.jpg";
      case "London":
        return "/unitedKingdomFlag.png";
      case "Milano":
        return "/italyFlag.png";
      case "München":
        return "/germanyFlag.png";
      case "Paris":
        return "/franceFlag.png";
      case "Rome":
        return "/italyFlag.png";
      case "Stockholm":
        return "/swedenFlag.png";
      case "Vienna":
        return "/austriaFlag.jpg";
      default:
        return "citiesPageImage.jpg";
    }
  };  

  return (
    <div
      style={{
        backgroundImage: `url(${getBackgroundImage(city)})`,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      {city && (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            position: 'absolute',
            top: '-11%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            marginTop: '-7%'
          }}
        >
          <h1 style={{ margin: '0' }}>Our top 2 in {city}</h1>
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', marginTop: 155 }}>
        {cityRestaurants.slice(0, 2).map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
