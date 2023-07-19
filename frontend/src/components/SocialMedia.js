import React from "react";
import { useSelector } from "react-redux";

const SocialMedia = ({ data }) => {
  const theme = useSelector((state) => state.theme);
  let url = "";
  if (data) {
    if (theme === "dark") {
      url = "../../images/dark/";
    } else if (theme === "light") {
      url = "../../images/light/";
    }
  } else {
    if (theme === "dark") {
      url = "./images/dark/";
    } else if (theme === "light") {
      url = "./images/light/";
    }
  }
  return (
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Matteo-CB">
          <img
            width={30}
            src={url + "github-142-svgrepo-com.svg"}
            alt="icon github"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:matteochantebiyikli@gmail.com"
        >
          <img
            width={30}
            src={url + "email-1-svgrepo-com.svg"}
            alt="icon email"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/chante-biyikli"
        >
          <img
            width={30}
            src={url + "linkedin-svgrepo-com.svg"}
            alt="icon linkedin"
          />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://wa.me/33641378441">
          <img
            width={30}
            src={url + "whatsapp-svgrepo-com.svg"}
            alt="icon whatsapp"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
