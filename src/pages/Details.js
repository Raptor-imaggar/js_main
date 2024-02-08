import React from "react";
import sitesData from "../data/sitesData";
import { useParams } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  alert(card.image)
  return (
    <>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div
          className="container mx-auto my-2 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <ImgSlider images={card.image} />
          <div className="title">
            <h1>Private room in hostel in India</h1>
          </div>
          <div className="description">
            <p>
              Our Hostel in Shangarh is nestled under the verdant, forested
              mountain ranges of the Great Himalayan National Park. Dipped in
              scenic beauty and a meditative quiet air, this backpackers’ hostel
              in Himachal Pradesh offers sublime views of snow-capped mountains
              with an environment suited for artists, digital nomads, and
              creators.
            </p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
