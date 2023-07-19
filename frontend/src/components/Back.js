import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Back = () => {
  const theme = useSelector((state) => state.theme);
  const { id } = useParams();
  var url =''
  if (theme === "dark") {
    if(id){
        url = "../images/light/back-svgrepo-com.svg";
    }else{

        url = "./images/light/back-svgrepo-com.svg";
    }
  } else if (theme === "light") {
    if(id){
        url = "../images/dark/back-svgrepo-com.svg";
    }else{

        url = "./images/dark/back-svgrepo-com.svg";
    }
  }
  const bgDetails = id ? 'bg-back-details' : ''
  return (
    <NavLink className={'back-container ' + bgDetails} to={"/"}>
      <img className="back-button" width={30} src={url} alt="retour à l'accueil" />
      <span>Retour</span>
    </NavLink>
  );
};

export default Back;
