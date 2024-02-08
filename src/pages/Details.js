import React from "react";
import sitesData from "../data/sitesData";
import { useParams } from 'react-router-dom';

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  
  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-20" data-aos="zoom-in">
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="col-span-2">
              {/* Image Slider */}
              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <img
                  src={card.image}
                  alt={card.location}
                  className="w-full h-60 object-cover rounded-lg sm:h-52 lg:h-auto"
                  loading="lazy"
                />
                  <img
                  src={card.image}
                  alt={card.location}
                  className="w-full h-60 object-cover rounded-lg sm:h-52 lg:h-auto"
                  loading="lazy"
                />
                  <img
                  src={card.image}
                  alt={card.location}
                  className="w-full h-60 object-cover rounded-lg sm:h-52 lg:h-auto"
                  loading="lazy"
                />
                {/* Add more images for slider */}
              </div>
            </div>
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col justify-center rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 lg:col-start-2">
              {/* Title and Subheading */}
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                {card.location}
              </h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                Entire house
              </p>
              {/* Location Icon */}
              <dl className="mt-4 text-xs font-medium flex items-center sm:mt-1 sm:row-start-3 md:mt-2.5">
                <dt className="sr-only">Reviews</dt>
                <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                  <div className="text-slate-400 font-normal">
                    build in 1920
                  </div>
                </dd>
                {/* Google Map */}
                <dd className="flex items-center">
                  {/* Google Map Component */}
                </dd>
              </dl>
            </div>
            <div className="col-span-2 mt-8">
              {/* List of Amenities */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Add amenity bulletins */}
              </div>
              {/* Descriptions */}
              <p className="mt-4 text-sm leading-6 lg:mt-6 dark:text-slate-400">
                This sunny and spacious room is for those traveling light and
                looking for a comfy and cosy place to lay their head for a night
                or two. This beach house sits in a vibrant neighborhood littered
                with cafes, pubs, restaurants and supermarkets and is close to all
                the major attractions such as Edinburgh Castle and Arthur's Seat.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
