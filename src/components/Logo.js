import React from 'react';
import logo from '../assets/img/logo.png'


const Logo = () => {
    return (
        <div className='logo'>
           <img src={logo} alt="logo react" className='logo-img' />    
        </div>
    );
};

export default Logo;