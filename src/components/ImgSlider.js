import React, { useEffect } from "react";
import "../pages/Details.css";
export default function Details(props) {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleCaptions");
    const carouselItems = carousel.querySelectorAll("[data-te-carousel-item]");
    const indicators = carousel.querySelectorAll(
      "[data-te-carousel-indicators] button"
    );

    let currentIndex = 0;

    function goToSlide(index) {
      carouselItems.forEach((item, i) => {
        item.classList.toggle("hidden", i !== index);
        item.classList.toggle("slide-in", i === index); // Add slide-in class
      });

      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("opacity-50", i !== index);
        indicator.setAttribute("aria-current", i === index ? "true" : "false");
      });

      currentIndex = index;
    }

    function goToNextSlide() {
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      goToSlide(nextIndex);
    }

    function goToPrevSlide() {
      const prevIndex =
        (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      goToSlide(prevIndex);
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        goToSlide(index);
      });
    });

    const prevButton = carousel.querySelector("[data-te-slide='prev']");
    prevButton.addEventListener("click", goToPrevSlide);

    const nextButton = carousel.querySelector("[data-te-slide='next']");
    nextButton.addEventListener("click", goToNextSlide);

    // Initial slide
    goToSlide(0);

    return () => {
      indicators.forEach((indicator, index) => {
        indicator.removeEventListener("click", () => {
          goToSlide(index);
        });
      });

      prevButton.removeEventListener("click", goToPrevSlide);
      nextButton.removeEventListener("click", goToNextSlide);
    };
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative max-w-screen-md mx-auto"
      data-te-carousel-init
      data-te-ride="carousel">
      <div
        className="absolute bottom-0 left-0 right-0 z-20 mx-auto mb-4 flex list-none justify-center p-0 "
        data-te-carousel-indicators>
        <button
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          className="mx-1 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-black bg-clip-padding p-0 -indent-999 opacity-50 transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          data-te-target="#carouselExampleCaptions"
          className="mx-1 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-black bg-clip-padding p-0 -indent-999 opacity-50 transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          data-te-slide-to="1"
          aria-label="Slide 1"></button>
        <button
          data-te-target="#carouselExampleCaptions"
          className="mx-1 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-black bg-clip-padding p-0 -indent-999 opacity-50 transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          data-te-slide-to="2"
          aria-label="Slide 1"></button>
      </div>

      <div className="relative w-full overflow-hidden shadow">
        <div
          className="relative float-left -mr-full w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none carousel-item"
          data-te-carousel-active
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}>
          <img
            src={props.image1}
            className="block w-full rounded-xl hights"
            alt="Slide 1"
          />{" "}
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black bg-opacity-30 backdrop-filter backdrop-blur-md  rounded">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-full hidden w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none carousel-item"
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}>
          <img
            src={props.image2}
            className="block w-full rounded hights"
            alt="Slide 2"
          />{" "}
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black bg-opacity-30 backdrop-filter backdrop-blur-md  rounded">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-full hidden w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none carousel-item"
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}>
          <img
            src={props.image3}
            className="block w-full rounded hights"
            alt="Slide 3"
          />{" "}
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block bg-black bg-opacity-30 backdrop-filter backdrop-blur-md  rounded">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-10 flex w-15 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-10 flex w-15 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}
