import React from "react";
import "./AboutSection.scss";
import about1 from "../../assets/img/about-1.jpg";
import about2 from "../../assets/img/about-2.jpg";
import checkIcon from "../../assets/img/check-icon--red.svg";
import chatBlue from "../../assets/img/chat--blue.svg";

const AboutSection = () => {
  const perks = [
    "Itaque earum rerum hic teneturs.",
    "Itaque earum rerum hic teneturs.",
    "Itaque earum rerum hic teneturs.",
    "Itaque earum rerum hic teneturs.",
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h6>Conócenos</h6>
            <h3>Una escuela comprometida con la educación desde 1939.</h3>
            <p>
              La Escuela Normal Rural Justo Sierra Méndez; inicia actividades en
              la época Cardenista como Escuela Regional Campesina en Soconusco,
              Chiapas, vive varios traslados en 1938 y finalmente se establece
              en marzo de 1939 en la comunidad de José María Morelos y Pavón
              (Cañada Honda), Aguascalientes, en una hacienda expropiada en el
              periodo posterior a la Revolución Mexicana
            </p>
            <div className="about__perks">
              {perks.map((perk, idx) => (
                <p key={idx}>
                  <img src={checkIcon} alt="" />
                  {perk}
                </p>
              ))}
            </div>
            <div className="about__cta">
              <a href="">
                <img src={chatBlue} alt="" />
                <span className="d-flex flex-column justify-content-center ms-3">
                  <span>¿Tienes alguna pregunta?</span>
                  <span>(449) 123 4567</span>
                </span>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 d-flex flex-wrap order-1 order-lg-2"
            style={{ gap: "1rem" }}
          >
            <img src={about1} className="img-fluid d-none d-lg-block" alt="" />
            <img src={about2} className="img-fluid about-img" alt="" />
          </div>
        </div>
        <div className="about__stats">
          <h4>120+</h4>
          <h3>Estudiantes posgrado</h3>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
