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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl Arrowbutton rounded-full p-2 cursor-pointer z-10  transition duration-300">
        &lt;
      </button>
      <div className="w-full h-[25vh] overflow-hidden relative">
  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 ${
        index === currentSlide ? "block" : "hidden"
      }`}
      style={{ width: "100%", height: "25vh" }}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  ))}
</div>


      <button
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white rounded-full p-2 Arrowbutton cursor-pointer z-10 transition duration-300">
        &gt;
      </button>
    </div>
  );
}
