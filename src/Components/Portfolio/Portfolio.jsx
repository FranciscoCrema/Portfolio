import { Link } from "react-router-dom";
import "../../scroll.scss";
import "./portfolio.scss";
import IconVideos from "../../../public/font/Icons/IconVideos";
import IconCode from "../../../public/font/Icons/IconCode";
import IconTwitter from "../../../public/font/Icons/IconTwitter";
import IconImage from "../../../public/font/Icons/IconImage";

function Portfolio() {
  return (
    <section className="content__portfolio">
      <header className="portfolio__header">
        <h1 className="portfolio__title">Portfolio</h1>
      </header>

      <section className="portfolio__gallery">
        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria1.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">Lauvi</figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconVideos />
            </i>
          </Link>
          <span className="gallery__category">E-commerce</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria2.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">Futbol-club</figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconCode />
            </i>
          </Link>
          <span className="gallery__category">E-commerce</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria3.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">Anotador de tareas</figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconCode />
            </i>
          </Link>
          <span className="gallery__category">Practica</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria4.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">
            Red social tipo Twitter
          </figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconTwitter />
            </i>
          </Link>
          <span className="gallery__category">Web</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria5.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">
            Master de logica en programacion
          </figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconCode />
            </i>
          </Link>
          <span className="gallery__category">Cursos</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="/img/galeria6.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">
            Galeria de imagenes
          </figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconImage />
            </i>
          </Link>
          <span className="gallery__category">Proyectos</span>
        </figure>
      </section>
    </section>
  );
}

export default Portfolio;
