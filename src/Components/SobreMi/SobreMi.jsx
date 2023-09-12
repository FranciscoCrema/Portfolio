import { Link } from "react-router-dom";
import "./sobremi.scss";
import IconCode from "../../../public/font/Icons/IconCode";
import IconFormacion from "../../../public/font/Icons/IconFormacion";
import IconComputer from "../../../public/font/Icons/IconComputer";
import FaTerminal from "../../../public/font/Icons/IconAdmin";

function SobreMi() {
  return (
    <>
      <section className="content__about">
        <header className="about__header">
          <h2 className="about__title">
            Sobre <span className="title__color">Mi</span>
          </h2>
        </header>

        <section className="about__personal-info">
          <article className="personal-info__bio">
            <p className="personal-info__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              facilis sed veniam excepturi quam quis perferendis alias tempore
              animi repellat, eveniet amet, autem aperiam quo quia officia
              mollitia voluptas! Vitae, impedit. Consequatur accusamus inventore
              amet, rerum non, expedita laborum quae culpa quasi dicta eaque
              maiores optio magni, aliquid ea quidem aliquam nulla harum placeat
              modi delectus maxime id? Totam dignissimos, quas nulla veniam quia
              impedit sunt ipsam vero, dolores veritatis aliquam ducimus ab
              temporibus voluptate soluta, distinctio placeat? Cum, sequi.
            </p>
          </article>

          <div className="personal-info__data">
            <ul className="personal-info__list">
              <li className="personal-info__option">
                <span className="personal-info__title">Edad</span>
                <span className="personal-info__value">23</span>
              </li>

              <li className="personal-info__option">
                <span className="personal-info__title">Pais</span>
                <span className="personal-info__value">Argentina</span>
              </li>

              <li className="personal-info__option">
                <span className="personal-info__title">Ciudad</span>
                <span className="personal-info__value">Rosario, Santa Fe</span>
              </li>

              <li className="personal-info__option">
                <span className="personal-info__title">Email</span>
                <span className="personal-info__value">
                  francrema00@gmail.com
                </span>
              </li>

              <li className="personal-info__option">
                <span className="personal-info__title">Telefono</span>
                <span className="personal-info__value">+54 3413503667</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="about__services">
          <header className="services__header">
            <h3 className="services__title">
              Lo que <span className="title__color">hago</span>
            </h3>
          </header>

          <div className="services__container">
            <article className="services__service">
              <div className="service__icon">
                <i className="service__real-icon fa-solid">
                  <IconCode />
                </i>
              </div>

              <div className="service__content">
                <h3 className="service__title">Programacion</h3>
                <p className="service__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate recusandae hic aspernatur fuga consectetur
                  consequatur sint quo voluptas repellendus.
                </p>
              </div>
            </article>

            <article className="services__service">
              <div className="service__icon">
                <i className="service__real-icon fa-solid">
                  <IconFormacion />
                </i>
              </div>

              <div className="service__content">
                <h3 className="service__title">Programacion</h3>
                <p className="service__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate recusandae hic aspernatur fuga consectetur
                  consequatur sint quo voluptas repellendus.
                </p>
              </div>
            </article>

            <article className="services__service">
              <div className="service__icon">
                <i className="service__real-icon fa-solid">
                  <IconComputer />
                </i>
              </div>

              <div className="service__content">
                <h3 className="service__title">Desarrollo Web</h3>
                <p className="service__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate recusandae hic aspernatur fuga consectetur
                  consequatur sint quo voluptas repellendus.
                </p>
              </div>
            </article>

            <article className="services__service">
              <div className="service__icon">
                <i className="service__real-icon fa-solid">
                  <FaTerminal />
                </i>
              </div>

              <div className="service__content">
                <h3 className="service__title">Administracion</h3>
                <p className="service__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate recusandae hic aspernatur fuga consectetur
                  consequatur sint quo voluptas repellendus.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}

export default SobreMi;
