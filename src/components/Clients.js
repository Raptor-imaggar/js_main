import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all images
import client1 from "../images/client/client1.png";
import client2 from "../images/client/client2.png";
import client3 from "../images/client/client3.png";
import client4 from "../images/client/client4.png";
import client5 from "../images/client/client5.png";
import client6 from "../images/client/client6.png";
import client7 from "../images/client/client7.png";
import client8 from "../images/client/client8.png";
import client9 from "../images/client/client9.png";
import client10 from "../images/client/client10.png";
import client11 from "../images/client/client11.png";
import client12 from "../images/client/client12.png";
import client13 from "../images/client/client13.png";
import client14 from "../images/client/client14.png";
import client15 from "../images/client/client15.png";

const clientsImages = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client15,
];

const clientImageStyle = {
  maxWidth: "100%", // Make images responsive
  height: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
   
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <Slider {...settings}>
            {clientsImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
                style={clientImageStyle}
              >
                <img src={image} alt={`client-${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Clients;
