import React from "react";
import sitesData from "../../data/sitesData";
import { useParams } from "react-router-dom";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import Pricepage from "../pricecard/Pricecard";
import "./ViewCardpage.css";
import img2 from "./img9.webp";

export default function Details() {
  const { index } = useParams();
  const card = sitesData[parseInt(index)];
  alert(card.image);
  return (
    <>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
        <div
          className="container mx-auto my-2 px-4 lg:px-20"
          data-aos="zoom-in">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                />
              </svg>
              123, ABC Street, Chennai - 600001, Tamil Nadu, India.
            </div>
            <div className="img-rate">
              <div className="img-rate1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                  />
                </svg>
              </div>
              4.5 .<div className="Reviews78">78 Reviews</div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="M15.879 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.121l-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122zM4 8.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5m13.854-5.646a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708z"
              />
            </svg>
            <h2>Self check-in</h2>
            <p>You can check in with the building staff.</p>
          </div>

          <div class="row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 36 36">
              <path
                fill="currentColor"
                d="M15.08 31h-14A1.08 1.08 0 0 1 0 30V9c0-.596.484-1.08 1.08-1.08h14c.596 0 1.08.484 1.08 1.08v21a1.08 1.08 0 0 1-1.08 1m-11-19.04v2h8v-2zm3 12.92v2.16h2v-2.16z"
                class="clr-i-solid clr-i-solid-path-1"
              />
              <path
                fill="currentColor"
                d="M20.1 24.81h-2V6h-12V4h13a1 1 0 0 1 1 1z"
                class="clr-i-solid clr-i-solid-path-2"
              />
              <path
                fill="currentColor"
                d="M24.08 20h-2V2h-11V0h12a1 1 0 0 1 1 1z"
                class="clr-i-solid clr-i-solid-path-3"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <h2>Sakshi is a Superhost</h2>
            <p>Superhosts are experienced, highly rated Hosts.</p>
          </div>

          <div class="row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 56 56">
              <path
                fill="currentColor"
                d="M5.137 28.223c.82.82 1.64 1.078 3.258 1.078l17.742.094c.164 0 .304 0 .375.093c.07.07.093.211.093.352l.07 17.766c.024 1.617.282 2.437 1.102 3.257c1.102 1.125 2.649.938 3.797-.187c.61-.61 1.102-1.617 1.547-2.555L51.051 9.45c.937-1.968.82-3.422-.14-4.383c-.939-.937-2.392-1.054-4.36-.117L7.879 22.88c-.938.445-1.945.937-2.555 1.547c-1.125 1.148-1.312 2.672-.187 3.797"
              />
            </svg>
            <h2>Great location</h2>
            <p>90% of recent guests gave the location a 5-star rating.</p>
          </div>
          <div className="liness"></div>

          <div className="titleoffer">Specifications of Fairland Township</div>
          <div class="grid-container">
            <div class="grid-item">
              <i class="fas fa-swimming-pool"></i>
              <span>
                {" "}
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      stroke-width="4"
                      d="M36 27V8c0-2.21 1.79-4 4-4h4M10 27V8c0-2.21 1.79-4 4-4h4m-8 8h26m-26 8h26M4 34l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40"
                    />
                  </svg>{" "}
                  <div className="iconoffer"> Swimming Pool</div>
                </div>{" "}
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-parking"></i>
              <span>
                {" "}
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48">
                    <path
                      fill="currentColor"
                      d="M36.5 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H39v28.75a1.25 1.25 0 1 0 2.5 0V16H44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-4 4.187A6.25 6.25 0 0 0 30.979 6H16.673a6.25 6.25 0 0 0-6.07 4.763L9.81 14H7.25a1.25 1.25 0 1 0 0 2.5h1.948l-.433 1.767A4.252 4.252 0 0 0 6 22.25v17.5A3.25 3.25 0 0 0 9.25 43h3.5A3.25 3.25 0 0 0 16 39.75V36.5h16v3.25A3.25 3.25 0 0 0 35.25 43H37v-2.5h-1.75a.75.75 0 0 1-.75-.75V36.5H37V34H8.5V22.25c0-.966.784-1.75 1.75-1.75H37V18H11.404l1.627-6.642A3.75 3.75 0 0 1 16.673 8.5H30.98c.536 0 1.053.114 1.521.322zM20.25 28a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zM14 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4m22-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8.5 39.75V36.5h5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75"
                    />
                  </svg>
                  <div className="iconoffer">Parking </div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-garden"></i>
              <span>
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15">
                    <path
                      fill="currentColor"
                      d="M4 5v-.5a2.5 2.5 0 0 1 5 0v5.793l2.365-2.365l-.347-1.295l-.001-.006h-.001a.5.5 0 0 1 .838-.481l2 2a.5.5 0 0 1-.479.838l-.01-.003l-1.293-.346L9 11.707V12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.464L1.732 9.268a2.503 2.503 0 0 1 0-3.536A2.493 2.493 0 0 1 3.5 5zm0 1h-.5a1.5 1.5 0 0 0-1.061 2.561L4 10.121zm4-1v-.5a1.5 1.5 0 0 0-3 0V5z"
                    />
                  </svg>
                </div>
                <div className="iconoffer">Garden</div>
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-wifi"></i>
              <span>
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18 9.98L6 22h16V5.97zM20 20h-2v-7.22l2-2zM5.22 7.22L3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 0 1 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 0 1 9 0z"
                    />
                  </svg>
                </div>
                <div className="iconoffer"> WiFi</div>
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-bicycle"></i>
              <span>
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M.5 11.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m8.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m-2-.75l-3-5" />
                      <path d="M4.953 7.088L2.75 11.25L7 10.5l2.85-3.326m1.4 4.076L8.977 4.628h2.64M3 5.5h2.5" />
                    </g>
                  </svg>
                  <div className="iconoffer"> Bicycle Storage</div>
                </div>
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-gym"></i>
              <span>
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 50 50">
                    <path
                      fill="currentColor"
                      d="M17.962 44.874a1.007 1.007 0 0 1-.05 1.416l-2.172 2.031a.999.999 0 0 1-1.411-.051L1.68 34.638a1.007 1.007 0 0 1 .051-1.416l2.175-2.028a.998.998 0 0 1 1.411.051zm16.14-25.65a1.007 1.007 0 0 1-.051 1.416l-13.67 12.77a.999.999 0 0 1-1.411-.051l-3.263-3.521a1.007 1.007 0 0 1 .051-1.416l13.667-12.77a.997.997 0 0 1 1.41.051zM22.613 40.527c.374.403.351 1.04-.051 1.416l-2.175 2.03a.998.998 0 0 1-1.411-.051L6.334 30.29a1.007 1.007 0 0 1 .05-1.416l2.171-2.029a.999.999 0 0 1 1.411.051zm21.063-20.814a1.007 1.007 0 0 1-.052 1.416l-2.174 2.03a1 1 0 0 1-1.412-.05L27.394 9.48a1.006 1.006 0 0 1 .05-1.416l2.18-2.035a.997.997 0 0 1 1.41.051zm4.644-4.34a1.009 1.009 0 0 1-.051 1.417l-2.17 2.029a.997.997 0 0 1-1.41-.05L32.047 5.134a1.009 1.009 0 0 1 .05-1.417l2.172-2.033a.995.995 0 0 1 1.409.05z"
                    />
                  </svg>
                </div>
                <div className="iconoffer"> Gym</div>
              </span>
            </div>
            <div class="grid-item">
              <i class="fas fa-coffee"></i>
              <span>
                <div className="spangap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 64 64">
                    <path
                      fill="currentColor"
                      d="M50.409 14.564c-.171 0-.341.004-.51.011v-.009H14.628v23.245a6.296 6.296 0 0 0 6.295 6.296h22.679a6.298 6.298 0 0 0 6.296-6.296v-1.656c.168.007.338.013.509.013c6.199 0 11.224-4.665 11.224-10.862c.001-6.198-5.024-10.742-11.222-10.742m0 17.326c-.171 0-.341-.009-.51-.021V18.814c.167-.01.339-.018.51-.018c3.756 0 6.801 2.754 6.801 6.511s-3.044 6.583-6.801 6.583m12.462 13.575v.218a6.297 6.297 0 0 1-6.295 6.296H7.59a6.296 6.296 0 0 1-6.295-6.296v-.218z"
                    />
                  </svg>
                  <div className="iconoffer"> Coffee Shop</div>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              d="M20.45 18.777L24 11.512l3.55 7.265l.898-.44l-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004l-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664l-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
                            />
                          </svg>{" "}
                        </div>
                        <br />1 week ago
                      </div>
                    </div>
                    <p class="comment">
                      Amazing place! Words might not do the justice, you must
                      experience it. Serene surroundings. mind-blowing views
                      from the terrace, three of 5 bedrooms, the gazebos. Very
                      accessible for seniors. Clean rooms and bathrooms. Cute
                      pool by the terrace to enjoy with friends and family.
                      Prompt and friendly caretaker service.
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
              <h1 class="heading">Main Heading</h1>
              <h2 class="subheading">Check-in: 12:00 pm – 3:00 pm</h2>
              <h2 class="subheading">Checkout before 10:00 am</h2>
              <h2 class="subheading">4 guests maximum</h2>
              <div class="thangsbuttons">
                {" "}
                <button class="thangsbutton">Show more</button>
              </div>
            </div>
            <div className="thangsto1">
              <h1 class="heading">Cancellation policy</h1>
              <h2 class="subheading">
                Free cancellation before 12:00 pm on 10 Feb.
              </h2>
              <h2 class="subheading">
                Review the Host’s full cancellation policy
              </h2>
              <h2 class="subheading">applies even if you cancel </h2>
              <div class="thangsbuttons">
                {" "}
                <button class="thangsbutton">Show more</button>
              </div>
            </div>
            <div className="thangsto1">
              <h1 class="heading">Safety & property</h1>
              <h2 class="subheading">Carbon monoxide alarm not reported</h2>
              <h2 class="subheading">Smoke alarm not reported</h2>
              <h2 class="subheading">Security camera/recording device</h2>
              <div class="thangsbuttons">
                {" "}
                <button class="thangsbutton">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
