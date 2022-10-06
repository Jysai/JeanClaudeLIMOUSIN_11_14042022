import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="nav-header">
        <Logo />
        <Navigation />
      </div>
      <div className="wrap-error-404">
        <span className="error-404">404</span>
        <span className="message-404">Oups! La page que vous demandez n'existe pas.</span>
        <Link to={`/`}>
    <span className="home-404">Retourner sur la page d’accueil</span>
    </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
