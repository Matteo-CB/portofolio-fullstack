import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteProject } from "../dataSlice";

const Card = ({ data }) => {
  const mediaQuery = window.matchMedia("(max-width: 470px)");
  const backgroundSize = mediaQuery.matches ? "contain" : "cover";
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme);
  let url;

  function DeleteCard(id){
    dispatch(deleteProject(id))
  }

  if (theme === "dark") {
    url = "./images/dark/close-circle-svgrepo-com.svg";
  } else {
    url = "./images/light/close-circle-svgrepo-com.svg";
  }
  return (
    <div className="card">
      <div
        className="card-img cardi"
        style={{
          backgroundImage: `url(${data.coverStyle})`,
          backgroundPosition: "center",
          backgroundSize: backgroundSize,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fffffe",
        }}
      >
        <div className="card__content">
          <p className="card__title">{data.name}</p>
          <p className="card__description">{data.description}</p>
        </div>
      </div>
      <div className="card-content">
        <h2>{data.name}</h2>
        <a href={data.code} target="_blank" rel="noreferrer">
          Voir le code
        </a>
        <a href={data.url} target="_blank" rel="noreferrer">
          Voir le site
        </a>
        <NavLink to={"/details/" + data._id + "#header"}>Détails</NavLink>
        <img width={20} className="supp-card" src={url} onClick={DeleteCard(data._id)} />
        <div className="tags-container">
          {data &&
            data.techno.length > 0 &&
            data.techno.map((e, index) => {
              return (
                <span className="tags tags-techno" key={index}>
                  {e}
                </span>
              );
            })}
          {data &&
            data.outils.length > 0 &&
            data.outils.map((e, index) => {
              return (
                <span className="tags tags-outils" key={index}>
                  {e}
                </span>
              );
            })}
          {data &&
            data.methodologies.length > 0 &&
            data.methodologies.map((e, index) => {
              return (
                <span className="tags tags-metho" key={index}>
                  {e}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
