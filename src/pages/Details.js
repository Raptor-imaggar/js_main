import React from "react";
import sitesData from "../data/sitesData";
import { useParams } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";
import img1 from "./fc-img.jpg";
import img2 from "./fo-img.jpg";
import img3 from "./sc-img.jpg";

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  console.log(card.image);

  return (
    <>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div
          className="container mx-auto my-2 px-4 lg:px-20"
          data-aos="zoom-in">
          <ImgSlider image1={img1} image2={img2} image3={img3} />
          <div className="titile">
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
          <div class="line"></div>
        </div>
      </div>
          
    </>
  );
}
