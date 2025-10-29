import React from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/main.scss";

import Home from "./pages/Home";
import Normatividad from "./pages/Institucion/Normatividad";
import Nosotros from "./pages/Institucion/Nosotros";
import OrganizacionEscolar from "./pages/Institucion/OrganizacionEscolar";
import Maestria from "./pages/OfertaEducativa/Maestria";
import Licenciatura from "./pages/OfertaEducativa/Licenciatura";
import Cursos from "./pages/OfertaEducativa/Cursos";
import Curso from "./pages/OfertaEducativa/Curso";
import Eventos from "./pages/VidaInstitucional/Eventos";
import Publicaciones from "./pages/VidaInstitucional/Publicaciones";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/normatividad" element={<Normatividad />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/organizacion-escolar" element={<OrganizacionEscolar />} />
      <Route path="/maestria" element={<Maestria />} />
      <Route path="/licenciatura" element={<Licenciatura />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/curso/:id" element={<Curso />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/publicaciones" element={<Publicaciones />} />
    </Routes>
  );
};

export default App;
