import React from "react";
import SocialMedia from "./SocialMedia";
import ToggleButton from "./ToggleButton";
import { NavLink } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <header id="header">
      <NavLink className={'header-title'} to={"/"}>
        <h1>Matteo CB</h1>
      </NavLink>
      <SocialMedia data={data} />
      <ToggleButton />
    </header>
  );
};

export default Header;
