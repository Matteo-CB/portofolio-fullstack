import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import FormTemplate from "../components/FormTemplate";
import Back from "../components/Back";

const Contact = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  const theme = useSelector((state) => state.theme);
  return (
    <div className={"contact " + theme}>
      <Header />
      <Back />
      <FormTemplate />
      <Footer />
    </div>
  );
};

export default Contact;
