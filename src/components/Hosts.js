import Card from "./Card";
import Data from "../data/logements.json"


const Hosts = () => {

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
