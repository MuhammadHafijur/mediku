import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div>
      <section className="text-gray-600 body-font banner">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl md:text-5xl mb-4 font-medium text-gray-900">
              We are providing
              <br className="hidden lg:inline-block" />
              best and affordable <br /> health care
            </h1>
            <p className="text-2xl mb-8 leading-relaxed">
              Our skilled doctors have tremendous experience with <br /> wide
              range of diseases to serve the needs of our patients
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">
                Get Appointment
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Sign Up
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImg}
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
