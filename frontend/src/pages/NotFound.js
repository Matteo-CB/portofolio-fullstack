import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="notfound">

      <h1>404</h1>
      <h2>Page introuvable</h2>
      <NavLink to={'/'}>Retour à l'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
