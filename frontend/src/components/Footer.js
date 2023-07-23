import React, { useCallback, useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../dataSlice";

const Footer = ({ data }) => {
  const dispatch = useDispatch();
  const Alldata = useSelector((state) => state.data.uniqueItems.All);
  const adminRed = useSelector((state) => state.admin);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function handleToggleChange1() {
    setIsOpen1(!isOpen1);
  }
  function handleToggleChange2() {
    setIsOpen2(!isOpen2);
  }
  function handleToggleChange3() {
    setIsOpen3(!isOpen3);
  }

  const checkedTechno = document.querySelectorAll(".te-check");
  const checkedOutils = document.querySelectorAll(".ou-check");
  const checkedMetho = document.querySelectorAll(".me-check");
  checkedOutils.forEach((e) => {
    e.parentElement.addEventListener("click", () => {
      if (e.parentElement.children[0].checked) {
        e.parentElement.classList.add("checked");
        e.parentElement.classList.remove("unchecked");
      } else {
        e.parentElement.classList.add("unchecked");
        e.parentElement.classList.remove("checked");
      }
    });
  });

  checkedTechno.forEach((e) => {
    e.parentElement.addEventListener("click", () => {
      if (e.parentElement.children[0].checked) {
        e.parentElement.classList.add("checked");
        e.parentElement.classList.remove("unchecked");
      } else {
        e.parentElement.classList.add("unchecked");
        e.parentElement.classList.remove("checked");
      }
    });
  });

  checkedMetho.forEach((e) => {
    e.parentElement.addEventListener("click", () => {
      if (e.parentElement.children[0].checked) {
        e.parentElement.classList.add("checked");
        e.parentElement.classList.remove("unchecked");
      } else {
        e.parentElement.classList.add("unchecked");
        e.parentElement.classList.remove("checked");
      }
    });
  });
  const [admin, setAdmin] = useState("close");
  const [isAdmin, setIsAdmin] = useState(adminRed);
  useEffect(() => {
    console.log(adminRed);
    setIsAdmin(adminRed);
  }, [adminRed]);
  const { id } = useParams();
  const theme = useSelector((state) => state.theme);
  let url1;
  if (id >= 0) {
    if (theme === "dark") {
      url1 = "../images/dark/arrow-down-svgrepo-com.svg";
    } else {
      url1 = "../images/light/arrow-down-svgrepo-com.svg";
    }
  } else {
    if (theme === "dark") {
      url1 = "./images/dark/arrow-down-svgrepo-com.svg";
    } else {
      url1 = "./images/light/arrow-down-svgrepo-com.svg";
    }
  }
  useEffect(() => {
    const body = document.querySelector("body");
    if (admin === "open") {
      body.classList.add("block");
    } else {
      body.classList.remove("block");
    }
  }, [admin]);

  let url;

  if (id !== undefined) {
    if (theme === "dark") {
      url = "../images/dark/close-circle-svgrepo-com.svg";
    } else {
      url = "../images/light/close-circle-svgrepo-com.svg";
    }
  } else {
    if (theme === "dark") {
      url = "../images/dark/close-circle-svgrepo-com.svg";
    } else {
      url = "../images/light/close-circle-svgrepo-com.svg";
    }
  }

  let initialUserData = {
    name: "",
    url: "",
    coverPublic: "",
    code: "",
    coverStyle: "",
    techno: [],
    methodologies: [],
    outils: [],
    carousel: [],
    description: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const updateUserDataHandler = useCallback(
    (type) => (event) => {
      setUserData({ ...userData, [type]: event.target.value });
    },
    [userData]
  );

  const updateCarouselDataHandler = useCallback(
    (type) => (event) => {
      setUserData({ ...userData, [type]: event.target.value.split(",") });
    },
    [userData]
  );

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();
      let arrayTechno = [];
      let arrayMetho = [];
      let arrayOutils = [];
      const inputValidTechno = document.querySelectorAll(
        ".techno-labels.checked"
      );
      inputValidTechno.forEach((e) => {
        arrayTechno.push(e.textContent.substring(0, e.textContent.length - 1));
      });
      const inputValidMetho = document.querySelectorAll(
        ".metho-labels.checked"
      );
      inputValidMetho.forEach((e) => {
        arrayMetho.push(e.textContent.substring(0, e.textContent.length - 1));
      });
      const inputValidOutils = document.querySelectorAll(
        ".outils-labels.checked"
      );
      inputValidOutils.forEach((e) => {
        arrayOutils.push(e.textContent.substring(0, e.textContent.length - 1));
      });
      userData.techno = arrayTechno;
      userData.methodologies = arrayMetho;
      userData.outils = arrayOutils;

      dispatch(addProject(userData));
      setAdmin("close");

      setUserData({
        name: "",
        url: "",
        coverPublic: "",
        code: "",
        coverStyle: "",
        techno: [],
        methodologies: [],
        outils: [],
        carousel: [],
        description: "",
      });
    },
    [userData]
  );

  return (
    <footer id="footer">
      <div className="text-footer">
        <NavLink to={"/legales"}>Mentions légales</NavLink>
        <NavLink to={"/licences"}>Licences</NavLink>
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/contact"}>Contactez-nous</NavLink>
      </div>
      <div className="text-footer t2">
        <NavLink to={"/signup"}>S'inscrire</NavLink>
        <NavLink to={"/login"}>Se connecter</NavLink>
        <a href="https://google.com">Téléchargez mon CV</a>
        <p
          className="p"
          onClick={() => {
            setAdmin("open");
          }}
        >
          Admin
        </p>
        <div
          className={admin === "open" && isAdmin ? "admin admin-open" : "admin"}
        >
          <img
            alt="close"
            width={20}
            onClick={() => {
              setAdmin("close");
            }}
            className="close"
            src={url}
          />

          <form onSubmit={formHandler()}>
            <label className="label-titre">
              <h3>Titre :</h3>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={updateUserDataHandler("name")}
              />
            </label>
            <div className="select-type">
              <div className="technos-check">
                <details>
                  <summary onClick={handleToggleChange1}>
                    <h3>
                      Techno
                      <img
                        alt="arrow"
                        src={url1}
                        width={20}
                        className={isOpen1 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.techno.map((e, key) => {
                      return (
                        <label
                          key={key}
                          className={"container unchecked techno-labels"}
                        >
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            className="te-check"
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>

              <div className="outils-check">
                <details>
                  <summary onClick={handleToggleChange2}>
                    <h3>
                      Outils
                      <img
                        alt="arrow"
                        src={url1}
                        width={20}
                        className={isOpen2 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.outils.map((e, key) => {
                      return (
                        <label
                          key={key}
                          className={"container unchecked outils-labels"}
                        >
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            className="ou-check"
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>

              <div className="methodologies-check">
                <details>
                  <summary onClick={handleToggleChange3}>
                    <h3>
                      Methodologies
                      <img
                        alt="arrow"
                        src={url1}
                        width={20}
                        className={isOpen3 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.methodologies.map((e, key) => {
                      return (
                        <label
                          key={key}
                          className={"container unchecked metho-labels"}
                        >
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            className="me-check"
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>
            </div>
            <div className="grid-form-bottom">
              <label>
                <h3>Descrition :</h3>
                <textarea
                  name={"description"}
                  value={userData.description}
                  onChange={updateUserDataHandler("description")}
                ></textarea>
              </label>
              <label>
                <h3>Cover :</h3>
                <input
                  type="text"
                  className="cover-path"
                  onChange={updateUserDataHandler("coverPublic")}
                />
              </label>
              <label>
                <h3>Cover :</h3>
                <input
                  type="text"
                  className="cover-path"
                  onChange={updateUserDataHandler("coverStyle")}
                />
              </label>
              <label>
                <h3>Carousel :</h3>
                <input
                  type="text"
                  className="carousel-path"
                  onChange={updateCarouselDataHandler("carousel")}
                />
              </label>
              <label>
                <h3>Url :</h3>
                <input
                  type="url"
                  value={userData.url}
                  onChange={updateUserDataHandler("url")}
                />
              </label>
              <label>
                <h3>Code :</h3>
                <input
                  type="url"
                  value={userData.code}
                  onChange={updateUserDataHandler("code")}
                />
              </label>
              <input type="submit" />
            </div>
          </form>
        </div>

        <div
          className={
            admin === "open" && !isAdmin ? "no-admin no-admin-open" : "no-admin"
          }
        >
          <img
            alt="close"
            width={20}
            onClick={() => {
              setAdmin("close");
            }}
            className="close"
            src={url}
          />
          <h3>Vous n'êtes pas admin !</h3>
        </div>
        <div
          onClick={() => {
            setAdmin("close");
          }}
          className={admin === "open" ? "bg-admin bg-admin-open" : "bg-admin"}
        ></div>
      </div>
      <SocialMedia data={data} />
    </footer>
  );
};

export default Footer;
