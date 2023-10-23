import React from "react";
import "../../scroll.scss";
import "./curriculum.scss";

function Curriculum() {
  return (
    <section className="content__resume">
      <header className="resume__header">
        <h1 className="resume__title">Curriculum</h1>
      </header>

      <div className="resume__container">
        <section className="resume__left">
          <header className="resume__subheader">
            <h2 className="resume__subtitle">Formacion</h2>
          </header>

          <div className="resume__timelines">
            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2014 - 2019</h4>
                <span className="timeline__company">E.E.T.Nº464</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Secundario</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>

            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2022</h4>
                <span className="timeline__company">CoderHouse</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Desarrollo web</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>

            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2022</h4>
                <span className="timeline__company">CoderHouse</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Javascript</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>

            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2022</h4>
                <span className="timeline__company">CoderHouse</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">React Js</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>
          </div>

          <header className="resume__subheader">
            <h2 className="resume__subtitle">Experiencia</h2>
          </header>

          <div className="resume__timelines">
            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2015 - 2016 </h4>
                <span className="timeline__company">Plomero</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Calefaccion</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>

            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2019</h4>
                <span className="timeline__company">
                  Centro de Expresiones Contemporaneas
                </span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Pasantia</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>

            <article className="timelines__timeline">
              <header className="timeline__header">
                <h4 className="timeline__year">2021</h4>
                <span className="timeline__company">Metalurgica</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Metalurgico</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos consectetur reprehenderit, repellendus
                  necessitatibus, expedita iure magnam, laborum iste labore
                  voluptate officiis doloribus rem sequi saepe.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="resume__rigth">
          <header className="resume__subheader">
            <h2 className="resume__subtitle">
              Habilidades de <span className="subtitle__color">diseño</span>
            </h2>
          </header>

          <div className="resume__skills">
            <article className="skills__title">
              <h4 className="skills__text">Diseño Web</h4>
              <span className="skills__number">40%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p1"></div>
            </div>

            <article className="skills__title">
              <h4 className="skills__text">Diseño logo</h4>
              <span className="skills__number">20%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p2"></div>
            </div>
          </div>

          <header className="resume__subheader">
            <h2 className="resume__subtitle">
              Habilidades de <span className="subtitle__color">color</span>
            </h2>
          </header>

          <div className="resume__skills">
            <article className="skills__title">
              <h4 className="skills__text">HTML/CSS</h4>
              <span className="skills__number">90%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p3"></div>
            </div>

            <article className="skills__title">
              <h4 className="skills__text">Javascript</h4>
              <span className="skills__number">65%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p4"></div>
            </div>

            <article className="skills__title">
              <h4 className="skills__text">React Js</h4>
              <span className="skills__number">50%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p5"></div>
            </div>

            <article className="skills__title">
              <h4 className="skills__text">Node Js</h4>
              <span className="skills__number">30%</span>
            </article>

            <div className="skills__progessbar">
              <div className="skills__percentage skills__percentage--p6"></div>
            </div>
          </div>

          <header className="resume__subheader">
            <h2 className="resume__subtitle">
              Areas de <span className="subtitle__color">Conocimientos</span>
            </h2>
          </header>

          <div className="resume__knowledges">
            <ul className="knowledges__list">
              <li className="knowledges__option">Programacion</li>
              <li className="knowledges__option">Desarrollo Web</li>
              <li className="knowledges__option">Electricidad</li>
              <li className="knowledges__option">Comunicacion</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="resume__certificates">
        <header className="resume__subheader">
          <h2 className="resume__subtitle">Certificados</h2>
        </header>

        <section className="certificates__container">
          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/certificado.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <h4 className="certificate__title">Desarrollo web</h4>
              <span className="certificate__date">20 Marzo 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/certificado.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <h4 className="certificate__title">Javascript</h4>
              <span className="certificate__date">12 junio 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/certificado.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <h4 className="certificate__title">React Js</h4>
              <span className="certificate__date">20 Octubre 2022</span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Curriculum;
