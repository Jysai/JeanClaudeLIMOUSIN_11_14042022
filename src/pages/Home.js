import React from 'react';
import Hosts from '../components/Hosts';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <div className='nav-header'>
            <Logo/>
            <Navigation/>
            </div>
            <Header/>
            <Hosts /> 
            <Footer />
        </div>
    );
};

export default Home;