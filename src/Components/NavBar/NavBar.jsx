import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import IconHome from "../../../public/font/Icons/IconHome";
import IconPerson from "../../../public/font/Icons/IconPerson";
import IconStudy from "../../../public/font/Icons/IconStudy";
import IconContact from "../../../public/font/Icons/IconContact";
import IconPortafolio from "../../../public/font/Icons/IconPortafolio";
import IconBlog from "../../../public/font/Icons/IconBlog";

function NavBar() {
  return (
    <div className="layout">
      <aside className="layout__aside">
        <section className="aside__user-info">
          {/* Informacion General */}
          <div className="user-info__general">
            <div className="user-info__container-img">
              <img
                src="../../../public/img/default-user.jpg"
                alt="Foto perfil"
                className="user-info__img"
              />
              <h2 className="user-info__name">Francisco Crema</h2>
              <h4 className="user-info__job">Desarrollador web</h4>
            </div>
          </div>

          {/* Nav*/}
          <nav className="layout__nav">
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/"} className="menu__link">
                  <IconHome />
                  <span className="menu__overlay">Home</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/sobre-mi"} className="menu__link">
                  <IconPerson />
                  <span className="menu__overlay">Sobre Mi</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/estudios"} className="menu__link">
                  <IconStudy />
                  <span className="menu__overlay">Estudios</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/portafolio"} className="menu__link">
                  <IconPortafolio />
                  <span className="menu__overlay">Portafolio</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/blog"} className="menu__link">
                  <IconBlog />
                  <span className="menu__overlay">Blog</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list">
              <li className="menu__option">
                <Link to={"/contacto"} className="menu__link">
                  <IconContact />
                  <span className="menu__overlay">Contacto</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="user-info__user-links">
            <ul className="links__social">
              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <div className="social__icon">
                    <BsInstagram />
                  </div>
                </Link>
              </li>

              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <div className="social__icon">
                    <BsLinkedin />
                  </div>
                </Link>
              </li>

              <li className="social__option">
                <Link to={"#"} className="social__link">
                  <div className="social__icon">
                    <BsGithub />
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="user-info__buttons">
            <Link to={"#"} className="user-info__btn">
              Descargar CV
            </Link>
          </div>
        </section>
      </aside>
    </div>
  );
}

export default NavBar;
