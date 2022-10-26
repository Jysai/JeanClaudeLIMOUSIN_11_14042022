import { React, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import Data from "../data/logements.json";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import Rating from "../components/Rating";

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

  const arrayHostEquipments = () => {
    if (location.equipments !== undefined) {
      return location.equipments.map((element, index) => (
        <li key={index}>{element}</li>
      ));
    }
  };

  return (
    <div>
      <div className="nav-header">
        <Logo />
        <Navigation />
      </div>
      <Carrousel img={location.pictures} />
      <div className="host-informations-wrap">
      <div className="host-title-location-tags">
        <div>
          <h2 className="title-host">{location.title}</h2>
          <span className="location-host">{location.location}</span>
          <Tags tags={location.tags} />
        </div>
      </div>
      <div className="host-name-profil-picture-rating">
       
        <div className="host-name-profil-picture">
          <span className="host-name">{location.host?.name}</span>
          <img
            src={location.host?.picture}
            alt="photo de profil"
            className="host-profil-picture"
          />
        </div>
        <div className="tags-and-rating">
          <Rating rating={location.rating} />
        </div>
      </div>
      </div>
      <div className="collapse-hosting">
        <div className="collapse-wrap-hosting">
          <Collapse title="Description" description={location.description}>
            {location.description}
          </Collapse>
        </div>
        <div className="collapse-wrap-hosting">
          <Collapse title="Equipements" equipments={arrayHostEquipments()}>
            <ul> {arrayHostEquipments()}</ul>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hosting;
