import "./App.css";
import "../public/font/Poppins/poppins.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SobreMi from "./Components/SobreMi/SobreMi";
import Estudios from "./Components/Estudios/Estudios";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
