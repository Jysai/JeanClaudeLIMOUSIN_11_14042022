import React from "react";
import DetailsAbout from "../components/DetailsAbout";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";




const About = () => {
  return (
    <div>
       <div className='nav-header'>
      <Logo/>
      <Navigation/>
      
      </div>
     
      <div className='about-img'> 
        
      </div>
      <div className="about-details">
      <DetailsAbout/>
      </div>
    </div>
  );
};

export default About;
