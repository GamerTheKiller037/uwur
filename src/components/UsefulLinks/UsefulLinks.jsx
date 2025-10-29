import React from "react";
import "./UsefulLinks.scss";
import interestLinksImg from "../../assets/img/interest-links.jpg";
import arrowBlue from "../../assets/img/right-arrow--blue.svg";

const UsefulLinks = () => {
  const links = [
    {
      id: 1,
      title: "Instituto de Educación de Aguascalientes",
      url: "#",
    },
    {
      id: 2,
      title:
        "Dirección General de Educación Superior para el Magisterio (DGSuM)",
      url: "#",
    },
    {
      id: 3,
      title: "Coordinación Nacional de Becas Para el Bienestar Benito Juarez",
      url: "#",
    },
    {
      id: 4,
      title: "CICLO ESCOLAR 2023-2024 ( Escuelas Normales)",
      url: "#",
    },
  ];

  return (
    <section className="useful-links">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="useful-links__container">
              <h4>Links de interés</h4>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime.
              </p>
              <div className="useful-links__list">
                {links.map((link) => (
                  <a key={link.id} href={link.url}>
                    {link.title}
                    <img src={arrowBlue} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="useful-links__media text-center">
              <img src={interestLinksImg} className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
