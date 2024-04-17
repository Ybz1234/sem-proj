import React from 'react';

import InfoCard from '../components/InfoCard';

const cardData = [
  {
    title: 'Sustainable Travel Values',
    description: 'Our values are deeply rooted in sustainability, community, and authenticity. We prioritize responsible tourism practices that respect local cultures and environments. Every experience we offer is designed to enrich both travelers and the places they visit, fostering meaningful connections and leaving a positive impact.',
    image: 'info1.jpg'
  },
  {
    title: 'Future of Tourism Services',
    description: 'Looking ahead, we are committed to pioneering innovative services that redefine the travel experience. From immersive digital guides to personalized concierge services, we are shaping the future of tourism to be more seamless, tailored, and enriching. Our goal is to anticipate travelers needs and exceed their expectations at every turn.',
    image: 'info2.jpg'
  },
  {
    title: 'Ideology: Travel for Unity',
    description: 'At the core of our ideology is the belief that travel has the power to broaden minds and bridge divides. We are dedicated to promoting inclusivity, diversity, and understanding through our journeys. By encouraging exploration beyond borders, we aim to foster a global community united by curiosity and respect.',
    image: 'info3.jpg'
  },
  {
    title: 'Europes Culinary Odyssey',
    description: 'Embark on a culinary journey through Europes rich tapestry of flavors and traditions. From the aromatic spices of the Mediterranean to the hearty comfort foods of Eastern Europe, each dish tells a story of history and heritage. Indulge in the vibrant markets, cozy cafes, and Michelin-starred restaurants that make Europe a gastronomic paradise.',
    image: 'info4.jpg'
  }
];

export default function About() {
  return (
    <div className="info-card-row">
      {cardData.map((card, index) => (
        <InfoCard key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
}
