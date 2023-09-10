import React from "react";
import "../../styles.scss";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import IconHome from "../../../public/font/Icons/IconHome";
import IconPerson from "../../../public/font/Icons/IconPerson";
import IconStudy from "../../../public/font/Icons/IconStudy";
import IconContact from "../../../public/font/Icons/IconContact";
import IconPortafolio from "../../../public/font/Icons/IconPortafolio";
import IconBlog from "../../../public/font/Icons/IconBlog";
import Footer from "../Footer/Footer";

function NavBar() {
  return (
    <div className="layout">
      <aside className="layout__aside">
        <section className="aside__user-info">
          {/* Informacion General */}
          <div className="user-info__general">
            <div className="user-info__container-img">
              <img
                src="../../../public/img/foto-perfil.jpeg"
                alt="Foto perfil"
                className="user-info__img"
              />
            </div>
            <h2 className="user-info__name">Francisco Crema</h2>
            <h4 className="user-info__job">Desarrollador web</h4>
          </div>

          {/* Nav*/}
          <nav className="layout__nav">
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/"} className="menu__link">
                  <i className="menu__icon">
                    <IconHome />
                  </i>
                  <span className="menu__overlay">Home</span>
                </Link>
              </li>

              <li className="menu__option">
                <Link to={"/sobre-mi"} className="menu__link">
                  <i className="menu__icon">
                    <IconPerson />
                  </i>
                  <span className="menu__overlay">Sobre Mi</span>
                </Link>
              </li>

              <li className="menu__option">
                <Link to={"/estudios"} className="menu__link">
                  <i className="menu__icon">
                    <IconStudy />
                  </i>
                  <span className="menu__overlay">Estudios</span>
                </Link>
              </li>

              <li className="menu__option">
                <Link to={"/portafolio"} className="menu__link">
                  <i className="menu__icon">
                    <IconPortafolio />
                  </i>
                  <span className="menu__overlay">Portafolio</span>
                </Link>
              </li>

              <li className="menu__option">
                <Link to={"/blog"} className="menu__link">
                  <i className="menu__icon">
                    <IconBlog />
                  </i>
                  <span className="menu__overlay">Blog</span>
                </Link>
              </li>

              <li className="menu__option">
                <Link to={"/contacto"} className="menu__link">
                  <i className="menu__icon">
                    <IconContact />
                  </i>
                  <span className="menu__overlay">Contacto</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="user-info__links">
            <ul className="links__social">
              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <i className="social__icon">
                    <BsInstagram />
                  </i>
                </Link>
              </li>
              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <i className="social__icon">
                    <BsLinkedin />
                  </i>
                </Link>
              </li>
              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <i className="social__icon">
                    <BsGithub />
                  </i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="user-info__buttons">
            <Link to={"#"} className="user-info__btn">
              Descargar CV
            </Link>
          </div>

          <Footer />
        </section>
      </aside>

      <main className="layout__content">
        <section className="content__page">
          <h1 className="page__name">Francisco Crema</h1>
          <h2 className="page__job">Desarrollador web Front-End</h2>
        </section>
      </main>
    </div>
  );
}

export default NavBar;
