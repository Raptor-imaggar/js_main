import React from "react";
import "./ImgSlider.css";
import detailsData from "../../data/ViewCardpage";
export default function ImgSlider() {
  return (
    <div className="post">
      <div class="container mx-auto px-5 py-2">
        <div class=" flex flex-wrap md:-m-2 ">
          <div class="flex w-1/2 flex-wrap ">
            <div class="w-full md:p-2">
              <img
                alt="gallery"
                class="block h-80 w-full rounded-lg object-cover object-center"
                src={detailsData.gried.image4}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-36 w-full rounded-lg object-cover object-center"
                src={detailsData.gried.image1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-36 w-full rounded-lg object-cover object-center"
                src={detailsData.gried.image2}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-40 w-full rounded-lg object-cover object-center"
                src={detailsData.gried.image3}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-40 w-full rounded-lg object-cover object-center"
                src={detailsData.gried.image5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
