import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ProjectsContainer from "../components/ProjectsContainer";
import Profil from "../components/Profil";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import FormTemplate from "../components/FormTemplate";

const Home = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Profil />
      <Skill />
      <ProjectsContainer />
      <FormTemplate />
      <Footer />
    </div>
  );
};

export default Home;
