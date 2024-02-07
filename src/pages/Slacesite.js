import React from "react";

import img1 from "./fc-img.jpg";
import img2 from "./sc-img.jpg";
import img3 from "./tc-img.jpg";
import img4 from "./fo-img.jpg";
import { Link, useNavigate } from 'react-router-dom';

const cardInfo = [
  {
    id: 0,
    image: img1,
    location: "Bujra, India",
    version: "Built in 2020",
    date: ["6–11 Feb"],
    price: "₹91,294 night",
  },
  {
    id: 1,
    image: img2,
    location: "Bujra, India",
    version: "Built in 2020",
    date: ["6–11 Feb"],
    price: "₹91,294 night",
  },
  {
    id: 2,
    image: img3,
    location: "Bujra, India",
    version: "Built in 2020",
    date: ["6–11 Feb"],
    price: "₹91,294 night",
  },
  {
    id: 3,
    image: img4,
    location: "Bujra, India",
    version: "Built in 2020",
    date: ["6–11 Feb"],
    price: "₹91,294 night",
  },
];

export default function Slacesite() {
 const navigate = useNavigate()
  return (
    <div className="bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cardInfo.map((card, index) => (
            <div key={index} onClick={() => navigate(`/details/${index}`)}> {/* Use navigate */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={card.image} alt={card.location} />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}