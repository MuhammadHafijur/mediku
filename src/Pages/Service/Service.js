import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, img, title } = props.service;
  return (
    <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link to={`/booking/${id}`}>
            <button
              class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
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
