import React from 'react';
import Hosts from '../components/Hosts';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <div className='nav-header'>
            <Logo/>
            <Navigation/>
            </div>
            <Header/>
            <Hosts /> 
        </div>
    );
};

export default Home;