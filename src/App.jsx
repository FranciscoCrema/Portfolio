import "./App.scss";
import "./styles.scss";
import "../public/font/Poppins/poppins.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Home/Main";
import NavBar from "./Components/NavBar/NavBar";
import SobreMi from "./Components/SobreMi/SobreMi";
import Curriculum from "./Components/Curriculum/Curriculum";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <NavBar />
        <main className="layout__content">
          <section className="content__page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/sobre-mi" element={<SobreMi />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/portafolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
