import React from "react";
import "./Pricecard.css";
export default function Pricecard() {
  return (
    <div>
      <div className="pricecardouter">
        <div className="pricecard">
          <div className="price500">$ 500</div>
          <div className="Squarefeet"> / Sq.feet</div>
          <div className="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
              />
            </svg>
            <div className="ratenum">4.88</div>{" "}
          </div>
          <div className="viewers">908 viewers</div>
        </div>
        <div className="buttonpad">
          {" "}
          <button className="conbutton">contact Us</button>
        </div>
        <div className="youwont">Call for Price</div>
        <div className="landdetails">
          <div className="lan1">Ownered by</div>
          <div className="lan2">Rabijackson</div>
        </div>
        <div className="landdetail">
          <div className="lan1">EC</div>
          <div className="lan2">Verified</div>
        </div>
        <div className="landdetail">
          <div className="lan1">Location</div>
          <div className="lan2">Machachi, Ecuador</div>
        </div>
        <div className="landdetail">
          <div className="lan1">days selected = 0</div>
          <div className="lan2">days selected = 0</div>
        </div>
        <div className="lines w-80"></div>
        <div className="bondvalue">
          <div className="lan1">Bond Value</div>
          <div className="lan">$ 1200</div>
        </div>
      </div>
    </div>
  );
}
