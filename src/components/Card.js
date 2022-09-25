import React from "react";
import { Link } from "react-router-dom";

const Card = ({ host, index }) => {
  
  return (
    <Link to={`/host/${host.id}`}>
      <li className="card">
        <img src={host.cover} alt={host.title} />
        <div className="infos">
          <h4>{host.title}</h4>
        </div>
      </li>
    </Link>
  );
};

export default Card;
