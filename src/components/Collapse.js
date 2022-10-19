import React from "react";

const Collapse = (props) => {
  const { useState } = React;

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="dropdown-wrapper-hosting dropdown-wrapper">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h4>{props.title}</h4>
        <i
          className={`fa fa-chevron-right icon-collapse ${isOpen && "open"}`}
        ></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        <div className="dropdown-item">
          <span>{props.children}</span>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
