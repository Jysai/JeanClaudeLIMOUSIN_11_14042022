import React from "react";

const CollapseAbout = ({ element, index }) => {
  const { useState } = React;

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (

    
    <div className="dropdown-wrapper">
      
      <div className="dropdown-header" onClick={toggleDropdown}>
        {element.title}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        <div className="dropdown-item">
          <span>{element.description}</span>
        </div>
      </div>
    </div>
  );
};

export default CollapseAbout;
