import React from 'react';
import { Link } from 'react-router-dom';
import logo from './hospital.png'

const NavBar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="" />
      <span className="ml-3 text-3xl font-semibold">Mediku.</span>
    </a>
    <nav className="md:mx-auto flex flex-wrap items-center font-semibold text-base justify-center">
      <Link to='/home' className="mr-5 hover:text-gray-900">Home</Link>
      <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
      <Link to='/services' className="mr-5 hover:text-gray-900">Services</Link>
      <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <Link to='/login' className="md:mr-3 inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LOGIN
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link to='/register' className="inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">REGISTER
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
        </div>
    );
};

export default NavBar;