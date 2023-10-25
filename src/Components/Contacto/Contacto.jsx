import React, { useEffect, useState, useRef } from "react";
import "../../scroll.scss";
import "./contacto.scss";
import "./loader.scss";
import IconLocation from "../../../public/font/Icons/IconLocation";
import IconPhone from "../../../public/font/Icons/IconPhone";
import IconEmail from "../../../public/font/Icons/IconEmail";
import emailjs from "@emailjs/browser";
import SweetAlert2 from "react-sweetalert2";

function Contacto() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [swalProps, setSwalProps] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5xnez7p",
        "template_ztidd77",
        e.target,
        "kqAaqgeYnuJX9xRNH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeLoaded(true);
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="content__contact">
      <header className="contact__header">
        <h1 className="contact__title">Contacto</h1>
      </header>

      <div className="contact__container">
        <section className="contact__info">
          <div className="contact__data">
            <i className="contact__icon">
              <IconLocation />
            </i>
            <h2 className="contact__subtitle">Rosario</h2>
          </div>

          <div className="contact__data">
            <i className="contact__icon">
              <IconPhone />
            </i>
            <h2 className="contact__subtitle">+54 3413503667</h2>
          </div>

          <div className="contact__data">
            <i className="contact__icon">
              <IconEmail />
            </i>
            <h2 className="contact__subtitle">francrema00@gmail.com</h2>
          </div>
        </section>

        <section className="contact__form-box">
          <div className="contact__map" id="load-iframe-map">
            {showLoader && <span className="loader"></span>}
            {iframeLoaded && (
              <iframe
                className={`contact__iframe ${showLoader ? "hidden" : ""}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33436.54263226953!2d-60.698811318023424!3d-32.94767964357257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca3e91a56d7%3A0xf81a76ab888290b0!2sAVELLANEDA%20y%20PELLEGRINI!5e0!3m2!1ses-419!2sar!4v1695212611279!5m2!1ses-419!2sar"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>

          <header className="contact__form-header">
            <h3 className="form-header__title">
              ¿Como puedo <span className="title__color">ayudarte?</span>
            </h3>
          </header>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="form__container">
              <section className="form__left">
                <div className="form__group">
                  <input
                    type="text"
                    name="user_name"
                    className="form_input"
                    placeholder="Nombre"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Nombre
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form_input"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    name="subject"
                    className="form_input"
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subject" className="form__label">
                    Asunto
                  </label>
                </div>
              </section>

              <section className="form__right">
                <div className="form__group form__group--textarea">
                  <textarea
                    className="form_input form_input--textarea"
                    name="message"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                  <label htmlFor="message" className="form__label">
                    Mensaje
                  </label>
                </div>
              </section>
            </div>
            <input
              type="submit"
              className="form__button"
              value="Enviar mensaje"
              onClick={() => {
                setSwalProps({
                  show: true,
                  text: "Se a enviado correctamente",
                  icon: "success",
                });
              }}
            />
            <SweetAlert2 {...swalProps} />
          </form>
        </section>
      </div>
    </section>
  );
}

export default Contacto;
