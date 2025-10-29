import React from "react";
import "./ServicesSection.scss";
import booksIcon from "../../assets/img/books-icon--light-blue.svg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Académico",
      description:
        "La habilitación docente es un factor primordial para incrementar la calidad educativa de la Escuela Normal Rural. Por esa razón es importante continuar con los esfuerzos por contar con profesores con posgrado que realicen las funciones de docencia, investigación, tutoría y gestión.",
    },
    {
      id: 2,
      title: "Extensión educativa",
      description:
        "Contamos con servicios educativos que ofrece la institución para apoyar las actividades académicas, culturales, cívicos y recreativas orientadas a fomentar, fortalecer y desarrollar un nivel amplio de cultura a la comunidad estudiantil, así como su identidad normalista y creación de espacios de comunicación y convivencia hacia el interior y exterior de la institución.",
    },
    {
      id: 3,
      title: "Arte, cultura y deporte",
      description:
        "La Escuela Normal se preocupa por prevalecer nuestra cultura, por esta razón se implementa en nuestro modelo educativo, actividades de formación complementaria como lo son la danza folklórica, rondalla, banda de guerra, club de animación, club de lectura y teatro. Se cuenta con equipos deportivos que nos representan a nivel estatal y nacional en basquetbol, fútbol, voleibol, natación y ajedrez.",
    },
    {
      id: 4,
      title: "Plataforma NEO",
      description:
        "NEO es un sistema de gestión del aprendizaje (LMS por sus siglas inglés) con el que fácilmente se pueden crear y gestionar todas las actividades de aprendizaje sin importar si se está construyendo clases en línea, evaluando a los estudiantes, fomentando el trabajo colaborativo o dando seguimiento al desempeño y logro de los alumnos. Para conocer más visita. https://www.neolms.com/latinoamerica",
    },
  ];

  return (
    <section className="services">
      <div className="services__header">
        <div className="container">
          <h2>Itaque earum rerum hic tenetur a sapiente delectus.</h2>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime.
          </p>
        </div>
      </div>
      <div className="services__cards">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`col-12 col-lg-6 col-xl-3 ${
                  index > 0 ? "mt-3 mt-lg-0" : ""
                } ${index === 2 ? "mt-3 mt-xl-0" : ""}`}
              >
                <div className="services__card">
                  <img src={booksIcon} alt="" />
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
