import React from "react";
import sitesData from "../../data/sitesData";
import { useParams } from "react-router-dom";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import Pricepage from "../pricecard/Pricecard";
import "./ViewCardpage.css";
import img2 from "./img9.webp";
import { BsHouseDoor, BsPeople, BsShield } from "react-icons/bs";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

import { FaPersonSwimming } from "react-icons/fa6";

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  alert(card.image);

  return (
    <>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div
          className="container mx-auto my-2 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <div className="UmboFarms">Jumbo farms, Heaven on earth.</div>
          <ImgSlider images={card.image} />

          <div>
            <div className="UmboFarms-loc">
              Entire villa in Pawna Lake, India
            </div>
            <div className="descriptions">
              By Real Value Land Promoters and Builders Pvt. Ltd.
            </div>
            <div className="maploc">
              <FaMapMarkerAlt size="20px" />
              123, ABC Street, Chennai - 600001, Tamil Nadu, India.
            </div>
            <div className="img-rate">
              <div className="img-rate1">
                <FaStar />
              </div>
              4.5 <div className="Reviews78">78 Reviews</div>
            </div>
          </div>
          <div className="Pricepages">
            <Pricepage />
          </div>

          <div className="liness1"></div>
          <div class="person-list">
            <div class="person py-5">
              <img src={img2} alt="Profile Picture" />
              <div class="person-info">
                <h3>Hosted by Sakshi</h3>
                <p>Superhost .3 years hosting</p>
              </div>
            </div>
          </div>
          <div className="liness1"></div>
          <div></div>
          <div class="row ">
            <BsHouseDoor size="20px" />
            <h2>Self check-in</h2>
            <p>You can check in with the building staff.</p>
          </div>

          <div class="row">
            <BsPeople size="20px" />
            <h2>Sakshi is a Superhost</h2>
            <p>Superhosts are experienced, highly rated Hosts.</p>
          </div>

          <div class="row">
            <BsShield size="20px" />
            <h2>Great location</h2>
            <p>90% of recent guests gave the location a 5-star rating.</p>
          </div>
          <div className="liness"></div>

          <div className="titleoffer">Specifications of Fairland Township</div>
          <div class="grid-container">
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                {" "}
                <div className="spangap">
                  <div className="iconoffer">Swimming Pool</div>
                </div>{" "}
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                {" "}
                <div className="spangap">
                  <div className="iconoffer">Parking</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                <div className="spangap">
                  <div className="iconoffer">Garden</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                <div className="spangap">
                  <div className="iconoffer">WiFi</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                <div className="spangap">
                  <div className="iconoffer">Bicycle Storage</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                <div className="spangap">
                  <div className="iconoffer">Gym</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <FaPersonSwimming />
              <span>
                <div className="spangap">
                  <div className="iconoffer">Coffee Shop</div>
                </div>
              </span>
            </div>

            <button class="custom-button">Show all 41 amenities</button>
          </div>
          <div className="straight"></div>
          <div className="commentalign">
            <div class="reviews">
              <div class="left">
                <div class="reviews">
                  <div class="review">
                    <div class="user-info">
                      <img src={img2} alt="Profile Picture" />
                      <div class="user-details">
                        <strong>Ravindra</strong>
                        <br />
                        Rating, 5 stars
                        <br />
                        <div className="starloding">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice; you must
                      experience it. Serene surroundings, mind-blowing views
                    </p>
                  </div>
                </div>
              </div>
              <div class="review">
                <div class="reviews">
                  <div class="">
                    <div class="user-info">
                      <img src={img2} alt="Profile Picture" />
                      <div class="user-details">
                        <strong>Ravindra</strong>
                        <br />
                        Rating, 3 stars
                        <br />
                        <div className="starloding">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice; you must
                      experience it. Serene surroundings, mind-blowing views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="custom-button1">View more 41 Comments</button>
          <div className="straight"></div>
          <div className="titleoffer">Things to know</div>
          <div className="thangs1">
            <div className="thangsto1">
              <h1 className="heading">Main Heading</h1>
              {[
                "Check-in: 12:00 pm – 3:00 pm",
                "Checkout before 10:00 am",
                "4 guests maximum",
              ].map((subheading, index) => (
                <h2 key={index} className="subheading">
                  {subheading}
                </h2>
              ))}
              <div className="thangsbuttons">
                <button className="thangsbutton">Show more</button>
              </div>
            </div>
            <div className="thangsto1">
              <h1 className="heading">Cancellation policy</h1>
              {[
                "Free cancellation before 12:00 pm on 10 Feb.",
                "Review the Host’s full cancellation policy",
                "Applies even if you cancel",
              ].map((subheading, index) => (
                <h2 key={index} className="subheading">
                  {subheading}
                </h2>
              ))}
              <div className="thangsbuttons">
                <button className="thangsbutton">Show more</button>
              </div>
            </div>
            <div className="thangsto1">
              <h1 className="heading">Safety & property</h1>
              {[
                "Carbon monoxide alarm not reported",
                "Smoke alarm not reported",
                "Security camera/recording device",
              ].map((subheading, index) => (
                <h2 key={index} className="subheading">
                  {subheading}
                </h2>
              ))}
              <div className="thangsbuttons">
                <button className="thangsbutton">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
