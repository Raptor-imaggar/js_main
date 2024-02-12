import React from "react";
import { useNavigate } from "react-router-dom";
import sitesData from "../data/sitesData";
import "../pages/Details.css";
import ImgSlider from "../components/cardSlider";

const cardInfo = sitesData;

export default function Slacesite() {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24 mt-20">
      <div className="container mx-auto px-4 lg:px-20" data-aos="fade-up">
        {/* Custom CSS for centering and adjusting spacing */}
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cardInfo.map((card, index) => (
            <div
              key={index}
              className="max-w-sm rounded-md overflow-hidden shadow-2xl mb-4 sm:mb-6 md:mb-8"
            >
              <div className="relative">
                <div>
                  <ImgSlider images={card.image} />
                </div>
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
                  </div>
                )}
              </div>
              <div className="Premium">
                <div className="sparkle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19 1l-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26"
                    />
                  </svg>
                </div>
                High-End
              </div>
              <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2 textcolor">
                  $ {card.price}
                  <div className="lead">/ Sq.feet</div>
                </div>
                <div className="font-bold text-xl mb-2 loc-color">
                  {card.location}
                </div>
                <p className="text-gray-700  lead1">
                  2699 Green Valley hughland lake ...
                </p>
              </div>
              <div className="bookbotton1">
                <div className="bookbottom">
                  <button
                    onClick={() => navigate(`/details/${index}`)}
                    className="bookbotton"
                  >
                    Buy
                  </button>
                </div>
              </div>
              <div class="line"></div>
              <div className="house">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.5 20.154v-13h4v-4h9v8h4v9h-7v-4h-3v4zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h3v-3h-3zm0-4h3v-3h-3z"
                  />
                </svg>
                <div className="homeicon">3Floor</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <rect width="36" height="36" x="6" y="6" rx="3" />
                    <path
                      stroke-linecap="round"
                      d="M28 6L6 28m36-8L20 42M40 8L8 40m4-18l7 7m10-10l7 7"
                    />
                  </g>
                </svg>
                <div className="homeicon">Apart</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <g fill="currentColor">
                    <path d="M22 13h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm5-7h3v-2h-3zm3 4h-3v-2h3zm-3 4h3v-2h-3z" />
                    <path
                      fill-rule="evenodd"
                      d="m17 4l16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2zm2 2.886l12 4.5V24h-3a1 1 0 0 0-1 1v17h-8zM12 22v20h5V22zm24 20h-2v-2h-3v2h-2V26h7z"
                      clip-rule="evenodd"
                    />
                  </g>
                </svg>
                <div className="homeicon">City</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
