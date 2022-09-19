import React from 'react';

const Card = ({host, index}) => {
    
    console.log(host.id);
    return (
        <li className="card" >
            <img src={host.cover} alt={host.title} />
            <div className="infos">
                <h4>
                {host.title}
                </h4>
            </div>
        </li>
    );
};

export default Card;