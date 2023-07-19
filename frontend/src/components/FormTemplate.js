import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_4ohn18e",
        "template_edimfa1",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <>
      <div className="contact-text">
        <h2>Contact</h2>
        <p>
          N'hésitez pas à me détailler votre projet, j'y répondrai avec plaisir
          !
        </p>
      </div>
      <div className="container-form" id="contact">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid-name">
              <label>Name</label>
              <input type="text" name="name" required autoComplete="off" />
            </div>
            <div className="grid-email">
              <label>Email</label>
              <input type="email" name="email" required autoComplete="off" />
            </div>
            <div className="grid-message">
              <label>Message</label>

              <textarea name="message" required />
            </div>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
      <div className="form-message"></div>
    </>
  );
};

export default FormTemplate;
