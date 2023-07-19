import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Filter from "./Filter";

const ProjectsContainer = () => {
  const data = useSelector((state) => state.data);
  const filter = useSelector((state) => state.filter);

  return (
    <>
      <div className="projets-title">
        <h2>Projets</h2>
        <Filter />
      </div>
      <div className="cards-container" id="projets">
        {filter !== ""
          ? data.projects
              .filter((e) => e.techno.includes(filter))
              .map((data, key) => {
                return <Card data={data} key={key} />;
              })
          : data.projects.map((data, key) => {
              return <Card data={data} key={key} />;
            })}
      </div>
    </>
  );
};

export default ProjectsContainer;
