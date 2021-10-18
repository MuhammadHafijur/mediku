import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {servicesId} = useParams();
    return (
        <div>
            <h1>This is booking {servicesId}</h1>
        </div>
    );
};

export default Booking;