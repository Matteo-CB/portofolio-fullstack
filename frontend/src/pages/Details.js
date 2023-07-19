import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Back from "../components/Back";

const Details = () => {
  const { id } = useParams();

  const theme = useSelector((state) => state.theme);
  const data = useSelector((state) => state.data);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const filterData = data.projects.filter((e) => id === e._id)[0];
  return (
    <div className={`details app ${theme}`}>
      <Header data={"../."} />
      <Back />
      <Carousel dataCarousel={filterData} />
      <div className="details-title">
        <h1>{filterData.name}</h1>
        <p>{filterData.description}</p>
      </div>
      <div className="tags-container">
        <div className="div-tags">
          <h2>Technologies</h2>
          {data &&
            filterData.techno.length > 0 &&
            filterData.techno.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-techno">{e}</span>
                </div>
              );
            })}
        </div>
        <div className="div-tags">
          <h2>Outils</h2>
          {data &&
            filterData.outils.length > 0 &&
            filterData.outils.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-outils">{e}</span>
                </div>
              );
            })}
        </div>
        <div className="div-tags">
          <h2>Méthodologies</h2>
          {data &&
            filterData.methodologies.length > 0 &&
            filterData.methodologies.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-metho">{e}</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="button-details">
        <a href={filterData.code} target="_blank" rel="noreferrer">
          Voir le code
        </a>
        <a href={filterData.url} target="_blank" rel="noreferrer">
          Voir le site
        </a>
      </div>
      <Footer data={"../."} />
    </div>
  );
};

export default Details;
