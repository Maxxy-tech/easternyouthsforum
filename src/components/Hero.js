import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './hero.css';
import png from '../1.png'

const images = [
  { src: {png} },
];

const Hero = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
      <div className=" sm:mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="sm:m-auto sm:pt-0 text-4xl font-bold text-black">Welcome to my website</h1>
        <p className="mt-4 text-xl text-black">
          This is the hero section of my website. It's a carousel that displays
          different images and captions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
