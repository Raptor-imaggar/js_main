import React from "react";
import img from "./fo-img.jpg";

export default function Details() {
  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-20" data-aos="zoom-in">
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:col-end-2 lg:col-span-1 lg:row-span-6">
              <img
                src={img}
                alt=""
                className="w-full h-60 object-cover rounded-lg sm:h-52 lg:h-auto"
                loading="lazy"
              />
            </div>
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col justify-center rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 lg:col-start-2">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                Beach House in Collingwood
              </h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                Entire house
              </p>
              <dl className="mt-4 text-xs font-medium flex items-center sm:mt-1 sm:row-start-3 md:mt-2.5">
                <dt className="sr-only">Reviews</dt>
                <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                  <div className="text-slate-400 font-normal">
                    build in 1920
                  </div>
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    aria-hidden="true"
                    fill="currentColor"
                    className="mx-3 text-slate-300">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-slate-400 dark:text-slate-500"
                    aria-hidden="true">
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  Collingwood, Ontario
                </dd>
              </dl>
            </div>
            <p className="mt-4 text-sm leading-6 lg:mt-6 dark:text-slate-400">
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cosy place to lay their head for a night
              or two. This beach house sits in a vibrant neighborhood littered
              with cafes, pubs, restaurants and supermarkets and is close to all
              the major attractions such as Edinburgh Castle and Arthur's Seat.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}