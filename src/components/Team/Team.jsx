import React from "react";
import "./Team.scss";
import mailIcon from "../../assets/img/mail-icon-red.svg";
import phoneIcon from "../../assets/img/phone-bg-red.svg";

const Team = ({
  title = "Dirección",
  description = 'Dirigir la Escuela Normal Rural "Justo Sierra Méndez" en sus actividades académicas y administrativas.',
  manager = {
    name: "Lluvia Ofelia Palomino Robledo",
    email: "direccion@enrjsm.edu.mx",
    phone: "(449) 9675049",
  },
  subManagers = [],
}) => {
  return (
    <section className="team">
      <div className="container">
        <p style={{ textAlign: "justify" }}>
          El propósito del Manual de Organización de la Escuela Normal Rural
          “Justo Sierra Méndez”, es proporcionar un marco descriptivo de su
          esquema orgánico funcional, a fin de que la operación de esta
          Institución, se lleve a cabo bajo los principios de calidad e igualdad
          de oportunidades. Con procedimientos administrativos eficientes y
          eficaces, niveles óptimos de aprovechamiento escolar de sus alumnos
          mediante personal docente capacitado y comprometido, creando
          condiciones de aprendizaje favorables como lo demanda la educación en
          el estado.
        </p>
        <p class="mt-3" style={{ textAlign: "justify" }}>
          La estructura organizacional fundamenta el surgimiento, mantenimiento
          y consolidación de la Escuela Normal Rural “Justo Sierra Méndez”; el
          marco legal que sustenta la existencia y operatividad, en referencia a
          la misión y visión de ésta; dada su particularidad, al ofertar la
          licenciatura en educación primaria, los valores y actitudes en el
          marco de la Educación Normal son parte fundamental de un sistema
          institucional; la estructura orgánica presenta una organización
          jerárquica del personal que integra la Escuela Normal; los puestos y
          funciones que desempeña el cuerpo directivo, personal docente.
        </p>

        <div className="team__accordion">
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button">
                  {title}
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <p style={{ textAlign: "justify" }}>{description}</p>

                  <div className="departmentManager">
                    <p>
                      <span>Encargado:</span> {manager.name}
                    </p>
                    <a href={`mailto:${manager.email}`}>
                      <img src={mailIcon} alt="" />
                      {manager.email}
                    </a>
                    <a href={`tel:${manager.phone}`}>
                      <img src={phoneIcon} alt="" />
                      {manager.phone}
                    </a>
                  </div>

                  {subManagers.length > 0 && (
                    <div className="departmentSubManagers">
                      {subManagers.map((subManager, idx) => (
                        <div key={idx} className="departmentSubManager">
                          <h5>{subManager.title}</h5>
                          <p style={{ textAlign: "justify" }}>
                            {subManager.description}
                          </p>
                          <p>
                            <span>Encargado:</span> {subManager.name}
                          </p>
                          <a href={`mailto:${subManager.email}`}>
                            <img src={mailIcon} alt="" />
                            {subManager.email}
                          </a>
                          <a href={`tel:${subManager.phone}`}>
                            <img src={phoneIcon} alt="" />
                            {subManager.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
