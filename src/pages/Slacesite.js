import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sitesData from "../data/sitesData";
import "../pages/Details.css";
import ImgSlider from "../components/cardSlider";

const cardInfo = sitesData;

export default function Slacesite() {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cardInfo.map((card, index) => (
            <div key={index} className="max-w-sm rounded-md overflow-hidden shadow-xl">
              <div className="relative">
              <div >
                <ImgSlider
                  images={card.image}
                
                /></div>
                {card.isPremium && (
                  <div className="absolute top-0 left-0 bg-blue-900 text-white py-1 px-4 rounded-br-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="ml-1">Premium</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center px-3 py-4">
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-2">
                    $ {card.price} / Sq.feet
                  </div>
                  <div className="text-gray-700 mb-2">{card.location}</div>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
                <button
                  onClick={() => navigate(`/details/${index}`)}
                  className="text-white bg-blue-900 hover:bg-blue-800 py-2 px-6 rounded-full transition duration-300"
                >
                  Book
                </button>
              </div>
              <div className="flex justify-between items-center px-3 py-2 border-t border-gray-200">
                {/* Your other content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
