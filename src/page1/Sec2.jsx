import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import  img1  from './images/sec2img1-min.jpg';
import  img2  from './images/sec2img2-min.jpg';
import  img3  from './images/sec2img3-min.jpg';
import  img4  from './images/sec2img4-min.jpg';
import  img5  from './images/sec2img5-min.jpg';
import  img6  from './images/sec2img6-min.jpg';
import  img7  from './images/sec2img7-min.jpg';
import  img8  from './images/sec2img8-min.jpg';
import  img9  from './images/sec2img9-min.jpg';
import  img10  from './images/sec2img10-min.jpg';
import  img11  from './images/sec2img11-min.jpg';
import  img12  from './images/sec2img12-min.jpg';

const Sec2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,  // Display 6 images at the front
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
    <h4 className='text-center fw-lighter '>Trusted by 1,000+ Companies Worldwide</h4>
    <Slider {...settings}>
      <div>
      <img src={img1} alt="Google" />
      </div>
      <div>
        <img src={img2} alt="Netflix" />
      </div>
    
      <div>
        <img src={img3} alt="Airbnb" />
      </div>
      <div>
        <img src={img4} alt="Amazon" />
      </div>
      <div>
        <img src={img5} alt="Facebook" />
      </div>
      <div>
        <img src={img6} alt="Grab" />
      </div>
      <div>
        <img src={img7} alt="Yahoo!" />
      </div>
      <div>
        <img src={img8} alt="Alphabet" />
      </div>
      <div>
        <img src={img9} alt="Microsoft" />
      </div>
      <div>
        <img src={img10} alt="Instagram" />
      </div>
      <div>
        <img src={img11} alt="oxford" />
      </div>
      <div>
        <img src={img12} alt="Bing" />
      </div>
    </Slider>
    </div>
  );
};

export default Sec2;




