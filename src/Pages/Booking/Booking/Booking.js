import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const Booking = () => {
  const { servicesId } = useParams();
  const [services] = useServices();
  const [details, setDetails] = useState([]);

  // fetching all data
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setDetails(data.find((item) => +servicesId === item.id)));
  }, [servicesId]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {details.title}
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">{details.desc}</p>
          <div className="flex justify-center"></div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={details.img}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
