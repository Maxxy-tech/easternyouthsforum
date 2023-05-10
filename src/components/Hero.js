import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hero.css";


import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // assuming you have imported your firebase config in a separate file

const Hero = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = collection(db, "images");
      const querySnapshot = await getDocs(imagesRef);
      const imagesData = querySnapshot.docs.map((doc) => doc.data());
      setImages(imagesData);
    };

    fetchImages();
  }, []);

  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        className="carousel w-screen "
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={image.alt}
              className="flex flex-auto  object-cover"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center content">
        <h1 className="text-4xl font-bold text-black">Welcome to my website</h1>
        <p className="mt-4 text-xl text-black">
          This is the hero section of my website. It's a carousel that displays
          different images and captions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
