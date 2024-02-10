import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-2 md:mx-4 mt-20 md:mt-12 lg:mt-4 p-2 md:p-8 h-full" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-4 lg:py-8 justify-between text-center lg:text-left md:mt-8">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-4 md:mb-6 md:mt-4 md:text-3xl text-xl font-bold text-blue-900">
                                Bespoke software solutions for your unique business needs
                            </h1>
                            <div className="text-lg font-semibold tracking-tight mb-4 md:mb-6 text-gray-500">We are a team of highly motivated and skilled developers dedicated to delivering only the best software.</div>
                            <div className="mb-2 md:mb-4">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full md:w-48 px-4 py-2 my-2 md:my-4 text-md md:text-lg shadow-xl rounded-2xl sm:w-48 sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full md:w-2/3 lg:w-full" src="https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg?t=st=1706963294~exp=1706966894~hmac=16e30b341dac9f66e71af577fde8ec8e9bbdc0fac99e6d5c1f8ad9e9fccda8cd&w=826" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
