import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, img, title, desc } = props.service;
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img className="rounded-t-lg w-full h-48 " src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            {desc.slice(0, 100)}
          </p>
          <Link to={`/booking/${id}`}>
            <button
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
