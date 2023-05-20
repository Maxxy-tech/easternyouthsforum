import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

function Testimonials() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setposts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

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

  return (
    <div className="bg-[#0b0a21] py-8 px-4 w-full">
      <div className="max-w-screen-xl p-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center p-4 underline text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 mb-6">
          Leave your comment
        </h2>
        <div className="max-w-3xl mx-auto p-4">
          <Slider {...settings}>
            {posts.map((post) => (
              <div key={post.author} className="testimonial-card ">
                <div className="bg-black rounded-lg shadow-lg p-6">
                  <p className="text-lg leading-7 font-medium text-gray-100 mb-4">
                    "{post.content}"
                  </p>
                  <div className="text-base leading-6 font-medium">
                    <p className="text-gray-100">{post.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-4">
            {posts.map((_, index) => (
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
