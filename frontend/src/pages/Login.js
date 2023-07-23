import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Back from "../components/Back";
import { NavLink } from "react-router-dom";

const Login = () => {
  const theme = useSelector((state) => state.theme);

  const initialUserData = {
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
      userData.email = "";
      userData.password = "";
    },
    [userData]
  );

  return (
    <div className={`login app ${theme}`}>
      <Header />
      <Back />
      <div className="login-flex">
        <div className="form-container">
          <p className="title">Se connecter</p>
          <form className="form" onSubmit={formHandler()}>
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
                Vous n'avez pas de compte ?
                <NavLink to={"/signup"}>S'inscrire</NavLink>
              </p>
            </div>
            <button className="sign">Se connecter</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
