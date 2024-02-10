import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 border-t border-b py-8 sm:py-12">
        {/* Top area: Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:py-8 mx-4 md:mx-auto border-t border-gray-200 lg:ml-11">
          {/* 1st block */}
          <div className="mb-8 lg:mb-0">
            <div className="box-border border-b-4 border-blue-900 p-4 sm:p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <img
                src="https://img.freepik.com/free-photo/high-view-house-with-garden-keys-blueprint_23-2148301697.jpg?size=626&ext=jpg&uid=R87762060&ga=GA1.1.79552872.1705298958&semt=ais"
                alt="Footer Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* 2nd block */}
          <div className="mb-8 lg:mb-0 text-center md:mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
            <ul className="text-md">
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  About
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Services
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="mb-8 lg:mb-0 text-center md:mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
            <ul className="text-md">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Mobile App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Domain and Hosting
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  General IT Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="mb-8 lg:mb-0 text-center md:mx-auto">
            <div className="text-center font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>
              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li className="ml-4">
                    <a
                      href="mailto:your@email.com"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center mx-auto px-4">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
            <div className="text-sm text-blue-900 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}{"  "}
              <HashLink to="#" className="hover:text-gray-900">
                Molad e Konsult
              </HashLink>
              . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
