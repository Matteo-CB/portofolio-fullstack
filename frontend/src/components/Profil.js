import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const Profil = () => {
  const name = useSelector((state) => state.name);
  return (
    <>
      <div className="profil">
        <h1>Bienvenue {name} !</h1>
        <h1 className="h1">
          je suis <span className="span">Matteo CB</span>, Développeur React.
        </h1>
        
        {/* <Button text={"Téléchargez mon CV"} /> */}
      </div>
    </>
  );
};

export default Profil;
