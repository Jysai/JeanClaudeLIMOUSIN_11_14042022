import React from 'react';
import logo from '../assets/img/logo-footer.png'

const Footer = () => {
    return (
        <div className='footer-bg'>
           <img src={logo} alt="logo-footer" />
           <span className ="copyright-footer">© 2020 Kasa. All rights reserved</span>
        </div>
    );
};

export default Footer;