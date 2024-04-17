import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="c1.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="c2.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="c3.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="c4.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="c5.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src="c6.jpg" alt="" className='carouselImg' />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;