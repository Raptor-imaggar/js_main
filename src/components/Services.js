import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4 text-center">
          <h2 className="text-3xl lg:text-4xl text-blue-900 uppercase font-bold">
            Services
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-4 text-lg lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div
          className="px-4 sm:px-8 lg:px-12"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: img,
                title: "Web Development",
                description:
                  "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
              },
              {
                img: img2,
                title: "Mobile App Development",
                description:
                  "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
              },
              {
                img: img3,
                title: "Domain and Hosting Services",
                description:
                  "We provide domain registration and web hosting services to individuals and organizations to enable them to gain visibility in the digital space.",
              },
              {
                img: img4,
                title: "General IT Consultations",
                description:
                  "Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
              >
                <div className="m-2 text-justify text-sm">
                  <img
                    alt={`Service ${index + 1}`}
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full"
                    src={service.img}
                  />
                  <h2 className="font-semibold my-4 text-xl text-center">
                    {service.title}
                  </h2>
                  <p className="text-md font-medium">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="m-auto max-w-6xl p-4 sm:p-8 lg:p-12">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            {[
              {
                icon: "path/to/icon1.svg",
                title: "We Build",
                description:
                  "With over 10 years of experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.",
              },
              {
                icon: "path/to/icon2.svg",
                title: "We Collaborate",
                description:
                  "We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suit your everyday needs and simplify various processes.",
              },
            ].map((feature, index) => (
              <div key={index} className="w-full lg:w-1/2 lg:mx-4 mb-8 lg:mb-0">
                <div className="text-blue-900 mb-4">
                  <img
                    alt={`Feature ${index + 1}`}
                    src={feature.icon}
                    className="fill-current w-12 h-12 mx-auto"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl text-blue-900 font-bold text-center">
                  {feature.title}
                </h3>
                <div>
                  <p className="my-3 text-lg lg:text-xl text-gray-600 font-semibold text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
