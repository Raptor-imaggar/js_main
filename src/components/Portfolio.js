import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="my-4 py-8 md:py-12" id='portfolio'>
            <h2 className="my-2 text-center text-3xl lg:text-4xl text-blue-900 uppercase font-bold">Products</h2>
            <div className='flex justify-center'>
                <div className='w-16 border-b-4 border-blue-900 mb-6'></div>
            </div>

            <div className="px-4 sm:px-8 lg:px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Business Management System', description: 'Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and from any location.', link: '/get-demo' },
                        { title: 'School Management Portal', description: 'Our all-encompassing School Management Portal is the only solution needed for any institution. The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.', link: '/get-demo' },
                        { title: 'Payroll Management System', description: 'The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually. With this system in place, you enjoy benefits such as increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.', link: '/get-demo' },
                        { title: 'Event Management System', description: 'Our event management system helps to manage different types of events, whether weddings, burials, With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable. With use cases already recorded for quite a number of events, we can assure you of a stress-less event management platform.', link: '/get-demo' },
                    ].map((item, index) => (
                        <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6 flex flex-col h-full">
                            <div className="flex flex-col flex-grow">
                                <div className="m-2 text-justify text-sm flex-grow">
                                    <h4 className="font-semibold my-4 text-lg md:text-xl lg:text-2xl text-center mb-4">{item.title}</h4>
                                    <p className="text-md font-medium leading-6 h-auto md:h-32 lg:h-48">{item.description}</p>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <Link to={item.link} className="text-white mt-10 bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
