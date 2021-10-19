import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const Booking = () => {
    const {servicesId} = useParams();
    const [services] = useServices()
    const [details, setDetails] = useState([])


    useEffect(()=>{

        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDetails(data.find(item => +servicesId === item.id)))
    } ,[servicesId])

    return (
        <div>
            <h1>This is booking {servicesId}</h1>

            <img src={details.img} alt="" />
            <h1>Title: {details.title}</h1>
            <p>Description {details.desc}</p>
        </div>
    );
};

export default Booking;