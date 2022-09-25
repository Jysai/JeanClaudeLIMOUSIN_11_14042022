// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Card from "./Card";
import Data from "../data/logements.json"


const Hosts = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => setData(res.data));
  // }, []);

  return (
    <div className="hosts">   
      <ul>
        {Data    
        .map((host, index) => (
          
          <Card key={index} host={host}/> 
        ))}
      </ul>
    </div>
  );
};

export default Hosts;
