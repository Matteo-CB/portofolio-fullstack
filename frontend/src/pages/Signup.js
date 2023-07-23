import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Back from "../components/Back";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const theme = useSelector((state) => state.theme);

  const initialUserData = {
    name: "",
    email: "",
    password: "",
    admin: false,
  };
  const [userData, setUserData] = useState(initialUserData);

  const updateUserDataHandler = useCallback(
    (type) => (event) => {
      setUserData({ ...userData, [type]: event.target.value });
    },
    [userData]
  );

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();
      if (userData.email === "matteo.biyikli3224@gmail.com") {
        userData.admin = true;
      }
      console.log(userData);
      userData.admin = false;
      userData.name = "";
      userData.email = "";
      userData.password = "";
    },
    [userData]
  );

  return (
    <div className={`signup-container app ${theme}`}>
      <Header />
      <Back />
      <div className="signup-flex">
        <div className="form-container">
          <p className="title">S'inscrire</p>
          <form className="form" onSubmit={formHandler()}>
            <div className="input-group">
              <label for="name">Prénom</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                value={userData.name}
                onChange={updateUserDataHandler("name")}
              />
            </div>
            <div className="input-group">
              <label for="username">Email</label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder=""
                value={userData.email}
                onChange={updateUserDataHandler("email")}
              />
            </div>
            <div className="input-group">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={userData.password}
                onChange={updateUserDataHandler("password")}
              />
            </div>
            <div className="social-message">
              <p className="signup">
                Vous avez déjà un compte ?
                <NavLink to={"/login"}>Se connecter</NavLink>
              </p>
            </div>
            <button className="sign">S'inscrire</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
