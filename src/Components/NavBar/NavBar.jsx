import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../scroll.scss";
import "./navbar.scss";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import IconHome from "../../../public/font/Icons/IconHome";
import IconPerson from "../../../public/font/Icons/IconPerson";
import IconStudy from "../../../public/font/Icons/IconStudy";
import IconContact from "../../../public/font/Icons/IconContact";
import IconPortafolio from "../../../public/font/Icons/IconPortafolio";
import IconHamburguer from "../../../public/font/Icons/IconHamburguer";
import IconXmark from "../../../public/font/Icons/IconXmark";
import Footer from "../Footer/Footer";

function NavBar() {
  const [isAsideVisible, setAsideVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const menuRef = useRef(null);

  const toggleAside = () => {
    setAsideVisible(!isAsideVisible);
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setAsideVisible(false);
    setMenuOpen(true);
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside
        ref={menuRef}
        className={`layout__aside ${
          isAsideVisible ? "layout__aside--visible" : ""
        }`}
      >
        <section className="aside__user-info">
          {/* Informacion General */}
          <div className="user-info__general">
            <div className="user-info__container-img">
              <img
                src="/img/fotoperfil.jpg"
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
              <li className="menu__option" onClick={handleMenuItemClick}>
                <Link to={"/"} className="menu__link">
                  <i className="menu__icon">
                    <IconHome />
                  </i>
                  <span className="menu__overlay">Home</span>
                </Link>
              </li>

              <li className="menu__option" onClick={handleMenuItemClick}>
                <Link to={"/sobre-mi"} className="menu__link">
                  <i className="menu__icon">
                    <IconPerson />
                  </i>
                  <span className="menu__overlay">Sobre Mi</span>
                </Link>
              </li>

              <li className="menu__option" onClick={handleMenuItemClick}>
                <Link to={"/curriculum"} className="menu__link">
                  <i className="menu__icon">
                    <IconStudy />
                  </i>
                  <span className="menu__overlay">Curriculum</span>
                </Link>
              </li>

              <li className="menu__option" onClick={handleMenuItemClick}>
                <Link to={"/portafolio"} className="menu__link">
                  <i className="menu__icon">
                    <IconPortafolio />
                  </i>
                  <span className="menu__overlay">Portfolio</span>
                </Link>
              </li>

              <li className="menu__option" onClick={handleMenuItemClick}>
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
                <Link
                  to={"https://www.instagram.com/francrema8/"}
                  className="social__link"
                  target="_blank"
                >
                  <i className="social__icon">
                    <BsInstagram />
                  </i>
                </Link>
              </li>
              <li className="social__option">
                <Link
                  to={"https://www.linkedin.com/in/franciscocrema/"}
                  className="social__link"
                  target="_blank"
                >
                  <i className="social__icon">
                    <BsLinkedin />
                  </i>
                </Link>
              </li>
              <li className="social__option">
                <Link
                  to={"https://github.com/FranciscoCrema"}
                  className="social__link"
                  target="_blank"
                >
                  <i className="social__icon">
                    <BsGithub />
                  </i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="user-info__buttons">
            <Link
              to={"/CV.pdf"}
              className="user-info__btn"
              target="_blank"
              download={"Curriculum-FranciscoCrema.pdf"}
            >
              Descargar CV
            </Link>
          </div>

          <Footer />
        </section>
      </aside>

      <div className="layout__menu-toggle" onClick={toggleAside}>
        <i className="menu-toggle__icon">
          {isMenuOpen ? <IconHamburguer /> : <IconXmark />}
        </i>
      </div>
    </>
  );
}

export default NavBar;
