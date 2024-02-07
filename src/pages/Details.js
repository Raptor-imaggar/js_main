import React from "react";
import sitesData from "../data/sitesData";
import { useParams } from "react-router-dom";

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  console.log(card.image);

  return (
    <>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in">
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src={card.image}
              alt=""
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src={card.interior1}
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src={card.interior2}
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
