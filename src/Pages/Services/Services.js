import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices()

  return (
    <div>
      <h1 className="text-4xl font-medium text-center my-12 lg:mt-8 ">OUR SERVICES</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto">
      {
        services.map(service => <Service
        key={service.id}
        service={service}
        ></Service>)
      }
    </div>
    </div>
  );
};

export default Services;
