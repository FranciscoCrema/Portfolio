import "../../scroll.scss";
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
              Soy Francisco Luca Crema, un apasionado joven incursionando en el
              mundo de la tecnología de la información. Inicié mi trayectoria en
              la programación al estudiar Ingeniería en Sistemas.
              Posteriormente, realicé cursos de Desarrollo Web Front-End, donde
              adquirí habilidades en HTML, CSS, JavaScript y ReactJS. Además, me
              familiaricé con herramientas como Sass, Bootstrap y Node.js.
              Actualmente, continúo ampliando mis conocimientos en el desarrollo
              Back-End. Me destaco por mi responsabilidad en las tareas
              asignadas y mi compromiso con mantenerme informado sobre las
              últimas actualizaciones en el campo.
            </p>
            <br />
            <p>
              En la sección de portfolio, encontrarás algunos de los proyectos
              que he desarrollado desde mis inicios hasta los más recientes.
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
              Lo que <span className="title__color">ofrezco</span>
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
                <h3 className="service__title">Desarrollo Front-end</h3>
                <p className="service__description">
                  Especializado en la creación de interfaces de usuario
                  atractivas y funcionales utilizando las últimas tecnologías y
                  mejores prácticas en desarrollo web.
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
                <h3 className="service__title">Consultoría Técnica</h3>
                <p className="service__description">
                  Brindo asesoramiento técnico especializado para ayudarte a
                  tomar decisiones informadas en el desarrollo de proyectos
                  Front-end, desde la selección de tecnologías hasta la
                  implementación eficiente.
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
                <h3 className="service__title">Desarrollo Web Responsive</h3>
                <p className="service__description">
                  Diseño y desarrollo de sitios web totalmente receptivos para
                  garantizar una experiencia de usuario óptima en todos los
                  dispositivos y tamaños de pantalla.
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
                <h3 className="service__title">Optimización y Mantenimiento</h3>
                <p className="service__description">
                  Gestión eficiente de servidores y optimización de rendimiento
                  para garantizar que tus aplicaciones web sean rápidas, seguras
                  y siempre estén en funcionamiento.
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
