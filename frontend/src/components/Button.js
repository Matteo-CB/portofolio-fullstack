import React from "react";

const Button = ({ text }) => {
  return (
    <a
      className="learn-more"
      href="./doc/Matteochante-biyikli.pdf"
      download={"cv-Matteo-cb"}
    >
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </a>
  );
};

export default Button;
