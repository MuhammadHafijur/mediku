import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('./service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto">
      {
        services.map(service => <Service
        key={service.id}
        service={service}
        ></Service>)
      }
    </div>
  );
};

export default Services;
