import React from "react";
import { Link } from "react-router-dom";
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
                  Durante mi educación secundaria en la E.E.T. Nº464 (Técnica
                  2), me especialicé en Electromecánica, donde obtuve
                  conocimientos prácticos en instalaciones eléctricas, manejo de
                  tornos y diversas herramientas. Esta formación proporcionó una
                  sólida base técnica, permitiéndome desarrollar habilidades
                  prácticas esenciales para el trabajo con sistemas
                  electromecánicos y herramientas industriales.
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
                  En el año 2022, completé un curso intensivo de 2 meses y medio
                  en CoderHouse, centrado en el desarrollo web Front-End.
                  Durante este programa, adquirí habilidades fundamentales en la
                  construcción de sitios web, enfocándome en HTML, CSS, Sass y
                  Bootstrap. Este curso me proporcionó las bases sólidas
                  necesarias para crear interfaces de usuario atractivas y
                  funcionales.
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
                  Durante el año 2022, participé en un curso especializado de
                  JavaScript en CoderHouse, con una duración de 2 meses. Durante
                  este período, adquirí conocimientos sólidos en el lenguaje de
                  programación JavaScript, explorando conceptos fundamentales y
                  practicando su aplicación en el desarrollo web. Este curso me
                  permitió ampliar mis habilidades y trabajar en proyectos más
                  dinámicos y interactivos.
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
                  Durante el año 2022, participé en un curso especializado de
                  React.js en CoderHouse, con una duración de 1 mes y medio.
                  Este curso abordó el desarrollo de aplicaciones web modernas
                  utilizando React.js, y además, incluyó la integración con
                  Firebase para gestionar una base de datos en tiempo real.
                  Aprendí a construir interfaces interactivas y dinámicas, así
                  como a vincular el front-end con una base de datos para
                  gestionar productos y datos de manera eficiente.
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
                <h4 className="timeline__year">2015 - 2016</h4>
                <span className="timeline__company">
                  Instalador de Calefacción
                </span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Trabajos de Calefacción</h3>
                <p className="timeline__text">
                  Durante el periodo 2015-2016, colaboré activamente en trabajos
                  de instalación de calefacción, trabajando junto a mi padre,
                  quien es un profesional en el rubro. Participé en diversas
                  tareas, incluyendo la instalación de radiadores, piso radiante
                  y el mantenimiento de calderas. Esta experiencia no solo me
                  brindó habilidades técnicas en el campo, sino también la
                  oportunidad de aprender de manera práctica y directa,
                  contribuyendo al éxito de los proyectos de calefacción.
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
                  Durante el año 2019, realicé una pasantía en el Centro de
                  Expresiones Contemporáneas como parte de mi último año de
                  secundaria. En esta experiencia, me desempeñé en tareas de
                  mantenimiento, como el cuidado de las luces y paneles
                  utilizados para exposiciones. Además, colaboré en la
                  organización de eventos, asegurándome de que el lugar
                  estuviera bien decorado y listo para las exposiciones. Esta
                  experiencia me permitió desarrollar habilidades organizativas
                  y contribuir al éxito de eventos culturales y exposiciones.
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
                <h3 className="timeline__title">Operario en Metalurgica</h3>
                <p className="timeline__text">
                  Durante el año 2021, trabajé como operario en una empresa
                  metalúrgica, donde me asignaron tareas especializadas en
                  tornos a CNC. Mi responsabilidad principal fue la fabricación
                  de diversas piezas destinadas a maquinaria agrícola. Este rol
                  me permitió desarrollar habilidades técnicas en el manejo de
                  tornos CNC y la producción de piezas precisas para el sector
                  agrícola, contribuyendo al proceso de fabricación de
                  maquinaria de alta calidad.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="resume__rigth">
          <header className="resume__subheader">
            <h2 className="resume__subtitle">
              Habilidades de
              <span className="subtitle__color"> Programación</span>
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
              <li className="knowledges__option">Desarrollo Web Front-End</li>
              <li className="knowledges__option">Programación</li>
              <li className="knowledges__option">Diseño Responsive</li>
              <li className="knowledges__option">Consumo de APIs</li>
              <li className="knowledges__option">HTML5 y Semántica Web</li>
              <li className="knowledges__option">
                CSS3 y Preprocesadores (Sass/SCSS)
              </li>
              <li className="knowledges__option">JavaScript</li>
              <li className="knowledges__option">React.js</li>
              <li className="knowledges__option">
                Manejo de Estado (Redux/Context)
              </li>
              <li className="knowledges__option">
                Bootstrap y Frameworks de Estilos
              </li>
              <li className="knowledges__option">Git y Control de Versiones</li>
              <li className="knowledges__option">
                Optimización de Rendimiento
              </li>
              <li className="knowledges__option">
                Cross-Browser Compatibility
              </li>
              <li className="knowledges__option">Accesibilidad Web</li>
              <li className="knowledges__option">
                Electricidad y Electromecánica
              </li>
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
                src="/img/logos_coderhouse.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <Link
                to={
                  "https://www.coderhouse.com/certificados/62ace869261e2a00728f56bf?lang=es"
                }
                target="_blank"
              >
                <h4 className="certificate__title">Desarrollo web</h4>
              </Link>
              <span className="certificate__date">07 Junio 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/logos_coderhouse.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <Link
                to={
                  "https://www.coderhouse.com/certificados/6315e2600a459404f9b78277?lang=es"
                }
                target="_blank"
              >
                <h4 className="certificate__title">Javascript</h4>
              </Link>
              <span className="certificate__date">09 Agosto 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/logos_coderhouse.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <Link
                to={
                  "https://www.coderhouse.com/certificados/6364279123fe44000e13ae89?lang=es"
                }
                target="_blank"
              >
                <h4 className="certificate__title">React Js</h4>
              </Link>
              <span className="certificate__date">27 Octubre 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo">
              <img
                src="/img/logos_coderhouse.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <Link
                to={
                  "https://www.coderhouse.com/certificados/6364279123fe44000e13ae8c?lang=es"
                }
                target="_blank"
              >
                <h4 className="certificate__title">Carrera Front End</h4>
              </Link>
              <span className="certificate__date">27 Octubre 2022</span>
            </div>
          </article>

          <article className="certificates__certificate">
            <div className="certificate__logo miracle">
              <img
                src="/img/logo-miracle.png"
                alt="certificado"
                className="certificate__img"
              />
            </div>

            <div className="certificate__content">
              <Link
                to={
                  "https://drive.google.com/file/d/1ux6fET1qEHnFXqtR0zUsyT3KEPICtjEF/view?usp=sharing"
                }
                target="_blank"
              >
                <h4 className="certificate__title">Miracle Lab</h4>
              </Link>
              <span className="certificate__date">01 Noviembre 2023</span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Curriculum;
