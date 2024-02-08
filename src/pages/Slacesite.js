import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sitesData from "../data/sitesData";
const cardInfo = sitesData;

export default function Slacesite() {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardInfo.map((card, index) => (
  <div key={index} onClick={() => navigate(`/details/${index}`)} className="max-w-sm rounded overflow-hidden shadow-lg relative">
    <div className="cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        src={card.image}
        alt={card.location}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.location}</div>
        <p className="text-gray-700 text-base">{card.version}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {card.date.map((date, dateIndex) => (
          <span
            key={dateIndex}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {date}
          </span>
        ))}
      </div>
    </div>
    {/* Apply the Tailwind classes for specific styling */}
    <div className="gpayHold absolute top-5 right-1">
      {/* Google Pay component */}
    </div>
    <div className="credHold absolute top-0 right-12 w-48">
      {/* Credit Card component */}
    </div>
    <div className="walHold absolute right-3">
      {/* Wallet component */}
    </div>
    <div className="bn text-pink-600 text-4xl absolute top-0 right-48">
      {/* Brand Name component */}
    </div>
    <div className="gpayAsset1Hold absolute w-36">
      {/* Google Pay Asset 1 component */}
    </div>
    <div className="googlePayButtonContainer absolute w-32">
      <h1>jones</h1>
    </div>
    <div className="gpayAsset2Hold absolute left-[-11rem]">
      {/* Google Pay Asset 2 component */} jones
    </div>
  </div>
))}

              
        </div>
      </div>
    </div>
  );
}
