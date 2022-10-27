import React from 'react';
import headerImg from '../assets/img/header.png'

const Header = () => {
    return (
        <div className='header-wrap' >
           <img className='header-img' src={headerImg} alt="image du header de la page home" />
           <h1 className='title-header-img'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Header;