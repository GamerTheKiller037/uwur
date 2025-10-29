import React from "react";
import "./AboutHistory.scss";
import chatBlue from "../../assets/img/chat--blue.svg";
import aboutImg from "../../assets/img/about-secondary-1.jpg";

const AboutHistory = () => {
  return (
    <section className="aboutHistory">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h6>Conócenos un poco mejor</h6>
            <h3>Nuestra Historia</h3>
            <p>
              La Escuela Normal Rural Justo Sierra Méndez; inicia actividades en
              la época Cardenista como Escuela Regional Campesina en Soconusco,
              Chiapas, vive varios traslados en 1938 y finalmente se establece
              en marzo de 1939 en la comunidad de José María Morelos y Pavón
              (Cañada Honda), Aguascalientes, en una hacienda expropiada en el
              periodo posterior a la Revolución Mexicana.
            </p>
            <p>
              Con los cambios generados hacia 1940 es conocida como Regional
              Campesina y por la reforma al Artículo 3° Constitucional en 1946
              se concibe como Normal Rural. En años posteriores y por la
              vigencia del paradigma del normalismo rural cobra importancia su
              actividad educativa, se incrementa la matrícula y la cantidad de
              personal docente y de apoyo, se construyen nuevas áreas en el
              vasto terreno con que cuenta: dormitorios, comedor, viviendas para
              el personal docente y de apoyo, y posteriormente el edificio
              académico (Gutiérrez, s.f.)
            </p>
            <p>
              La Escuela Normal Rural se convirtió en importante foco de
              influencia en la región donde fue establecida, porque sus alumnas
              eran reclutadas en la zona, porque en ellas podía reunirse la
              gente a escuchar la radio o porque ayudaban a despiojar a los
              niños, daban comida a los familiares de los estudiantes, curaban a
              los enfermos, o representaban un vínculo con el gobierno federal
              para gestionar el reparto agrario o la obtención de créditos
              (Civera, 1997).
            </p>
            <div className="aboutHistory__cta">
              <a href="">
                <img src={chatBlue} alt="" />
                <span className="d-flex flex-column justify-content-center ms-3">
                  <span>¿Tienes alguna pregunta?</span>
                  <span>(449) 123 4567</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <img src={aboutImg} className="img-fluid" alt="" />
            <p className="red">
              Actualmente la escuela normal, es un internado exclusivo para
              mujeres, permanece inserta en la Delegación José María Morelos y
              Pavón, conocida por sus habitantes como Cañada Honda; más del 50%
              del personal adscrito a la institución radica en este sitio. Por
              tratarse de una comunidad con 2,500 habitantes (SEDESOL, 2017), la
              escuela normal representa para la población la posibilidad de
              contar con actividad económica, debido a que satisfacen distintas
              necesidades de las estudiantes (papelería, envíos de dinero, ropa,
              calzado, comida, entre otros)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
