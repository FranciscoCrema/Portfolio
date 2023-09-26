import { Link } from "react-router-dom";
import "../../scroll.scss";
import "./portfolio.scss";
import "../responsive.scss";
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
                src="../../../public/img/galeria-1.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">
            Produccion de video
          </figcaption>
          <Link to={"#"} target="_blank">
            <i className="gallery__icon">
              <IconVideos />
            </i>
          </Link>
          <span className="gallery__category">Videos</span>
        </figure>

        <figure className="gallery__item">
          <div className="gallery__container-img">
            <div className="gallery_link">
              <img
                src="../../../public/img/galeria-2.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">
            Master en JavaScript
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
                src="../../../public/img/galeria-3.jpg"
                alt="Imagen"
                className="gallery__img"
              />
            </div>
          </div>

          <figcaption className="gallery__title">Master en React</figcaption>
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
                src="../../../public/img/galeria-4.jpg"
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
                src="../../../public/img/galeria-5.jpg"
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
                src="../../../public/img/galeria-6.jpg"
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
