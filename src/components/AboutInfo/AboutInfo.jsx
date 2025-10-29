import React from "react";
import "./AboutInfo.scss";
import aboutImg from "../../assets/img/about-secondary-1.jpg";
import aboutImg2 from "../../assets/img/about-secondary-2.jpg";

const AboutInfo = () => {
  const sections = [
    {
      id: 1,
      title: "Política de calidad",
      description:
        "Fomentar profesionales de la educación que contribuyan cualitativamente al fortalecimiento del Sistema Educativo Nacional, mediante la adecuada sistematización de sus procesos: planificación, desarrollo y evaluación, así como la organización de la vida institucional a través del desarrollo equilibrado de las funciones de docencia, investigación, difusión, tutoría y gestión. Para ello, la institución prioriza la aplicación de planes de estudio con base en estándares, capacitación y actualización académica e implementa un sistema de gestión de calidad que favorece el trabajo colegiado y participativo en un clima laboral saludable que se apoye en el compromiso del personal de la institución.",
      image: aboutImg,
      reverse: false,
    },
    {
      id: 2,
      title: "Flexibilidad curricular y académica",
      description:
        "Fomentar profesionales de la educación que contribuyan cualitativamente al fortalecimiento del Sistema Educativo Nacional, mediante la adecuada sistematización de sus procesos: planificación, desarrollo y evaluación, así como la organización de la vida institucional a través del desarrollo equilibrado de las funciones de docencia, investigación, difusión, tutoría y gestión. Para ello, la institución prioriza la aplicación de planes de estudio con base en estándares, capacitación y actualización académica e implementa un sistema de gestión de calidad que favorece el trabajo colegiado y participativo en un clima laboral saludable que se apoye en el compromiso del personal de la institución.",
      image: aboutImg,
      reverse: true,
    },
    {
      id: 3,
      title: "Perfil de egreso",
      description:
        "El perfil de egreso constituye el elemento referencial para la construcción y diseño del Plan de Estudios. Éste expresa lo que el egresado será capaz de realizar al término del programa educativo. Señala los conocimientos, habilidades, actitudes y valores involucrados en los desempeños propios de la profesión docente. Está integrado por competencias genéricas y profesionales, así como sus unidades o elementos. El nuevo docente contará con las competencias indispensables para su incorporación al servicio profesional.",
      image: aboutImg,
      reverse: false,
    },
    {
      id: 4,
      title: "Investigación",
      description:
        "El Área de investigación, como área sustantiva tiene, entre otras finalidades, promover, coordinar, difundir y vincular la investigación educativa que se realice en la institución, con el propósito de consolidar el desarrollo de procesos académicos y fortalecer la formación y desarrollo profesional de los docentes de la Escuela Normal.",
      image: aboutImg2,
      reverse: true,
    },
  ];

  return (
    <section className="about__info">
      <div className="container">
        {sections.map((section, index) => (
          <div key={section.id} className={`row ${index > 0 ? "mb-5" : ""}`}>
            <div
              className={`col-12 col-lg-6 ${
                section.reverse ? "order-1 order-lg-2" : "order-2 order-lg-1"
              } d-flex flex-column justify-content-center align-items-center`}
            >
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
            <div
              className={`col-12 col-lg-6 ${
                section.reverse ? "order-2 order-lg-1" : "order-1 order-lg-2"
              } ${index > 0 ? "mt-3 mt-lg-0" : ""} mb-3 mb-lg-0`}
            >
              <img src={section.image} className="img-fluid" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInfo;
