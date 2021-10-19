import React from 'react';
import Doctors from '../../Components/Doctors/Doctors';
import Header from '../../Components/Header/Header';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;