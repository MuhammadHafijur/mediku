import React from 'react';
import { Link } from 'react-router-dom';
import logo from './hospital.png'

const NavBar = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="" />
      <span class="ml-3 text-3xl font-semibold">Mediku.</span>
    </a>
    <nav class="md:mx-auto flex flex-wrap items-center font-semibold text-base justify-center">
      <Link to='/home' class="mr-5 hover:text-gray-900">Home</Link>
      <Link to='/home' class="mr-5 hover:text-gray-900">Services</Link>
      <Link to='/home' class="mr-5 hover:text-gray-900">About</Link>
      <Link to='/home' class="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <button class="md:mr-3 inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LOGIN
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <button class="inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">REGISTER
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </div>
    );
};

export default NavBar;