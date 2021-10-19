import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const useServices = () => {
    const [services, setServices] = useState([])

  useEffect(() => {
    fetch('./service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return [services]
}

export default useServices;