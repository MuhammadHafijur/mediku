import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;