import React from "react";
import { Link } from "react-router-dom";
import notfound from "./notFoundpage.gif";

const NotFound = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img src={notfound} className="absolute h-full w-full object-cover" alt="" />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Page Not Found
          </h1>
          <Link to="/home" className="bg-gray-800 mt-8 text-white px-4 py-2">
            Back To Home
          </Link>
          <p className="font-extrabold text-8xl my-24 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
