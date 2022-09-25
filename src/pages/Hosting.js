import { React, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import Data from "../data/logements.json";

const Hosting = () => {
  const [location, setLocation] = useState({});

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const article = Data.filter((hosting) => hosting.id === id)[0];
    setLocation(article);
  }, [id, navigate]);

  return (
    <div>
      <div className="nav-header">
        <Logo />
        <Navigation />
      </div>
      <Carrousel img={location.pictures} />
    </div>
  );
};

export default Hosting;
