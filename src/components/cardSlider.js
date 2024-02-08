import React, { useState } from "react";

export default function ImgSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-gray-800 rounded-full p-2 cursor-pointer z-10 hover:bg-gray-600 transition duration-300"
      >
        &lt;
      </button>
      <div className="w-full h-[20vh] overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0  ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=" object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-gray-800 rounded-full p-2 cursor-pointer z-10 hover:bg-gray-600 transition duration-300"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 bg-gray-600 rounded-full mx-1 cursor-pointer hover:bg-gray-800 transition duration-300 ${
              index === currentSlide ? "bg-gray-800" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
