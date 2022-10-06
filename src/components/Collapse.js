import React from "react";

const Collapse = ( arrayHost ) => {
  

   

  const { useState } = React;

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (

    <div className="dropdown-wrapper-hosting">
      
      <div className="dropdown-header" onClick={toggleDropdown}>
      <h4>{arrayHost.title}</h4>
      <i className={`fa fa-chevron-right icon-collapse ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        <div className="dropdown-item">
        <span>{arrayHost.children.props.children}</span>


        
        </div>
      </div>
    </div>
  );
};

export default Collapse;
