import { React, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import Data from "../data/logements.json";
import Collaspe from "../components/Collapse";
import Footer from "../components/Footer";

const Hosting = () => {
  const [location, setLocation] = useState({});

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const article = Data.filter((hosting) => hosting.id === id)[0];

    if (typeof article === "undefined") {
      navigate("/404");
    } else {
      setLocation(article);
    }
  }, [id, navigate]);

  return (
    <div>
      <div className="nav-header">
        <Logo />
        <Navigation />
      </div>
      <Carrousel img={location.pictures} />

      <div>
        <div>
          <h2>{location.title}</h2>
          <span>{location.location}</span>
        </div>
        <div>
          {/* <span>{location.host.name}</span>
        */}
        </div>
      </div>
      <div>
        {/* <ul>
          {location.tags.map((element) => (
            <li key={tags}>{element}</li>
          ))}
        </ul> */}
      </div>

      <div className="collapse-hosting">
        <Collaspe title="Description">
          <p>{location.description}</p>
        </Collaspe>

        <Collaspe title="Equipements">
          {/* <ul>
          {location.equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
              </ul> */}

          <p>{location.equipments}</p>
        </Collaspe>
      </div>
      <Footer />
    </div>
  );
};

export default Hosting;
