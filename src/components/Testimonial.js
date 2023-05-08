import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setSliderIndex(index),
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Volunteer",
      quote:
        "The Eastern Youths Forum has given me the opportunity to make a real difference in my community. I feel like I'm part of something bigger than myself.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Member",
      quote:
        "I've met so many inspiring people through the Eastern Youths Forum. It's a great platform for young people who want to create positive change.",
    },
    {
      id: 3,
      name: "David Johnson",
      position: "Volunteer",
      quote:
        "I've been involved with the Eastern Youths Forum for several years now, and it's been a life-changing experience. I've learned so much and made lifelong friends.",
    },
  ];

  return (
    <div className="bg-gray-600 py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 mb-6">
          What Our Members Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-lg leading-7 font-medium text-gray-900 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-base leading-6 font-medium">
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === sliderIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setSliderIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
