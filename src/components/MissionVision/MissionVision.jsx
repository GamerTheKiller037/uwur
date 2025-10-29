import React from "react";
import "./MissionVision.scss";

const MissionVision = () => {
  return (
    <section className="missionVision">
      <div className="container">
        <h3>Nuestra Misión y Visión</h3>
        <div className="missionVision__cards">
          <div className="mission">
            <h4>Misión</h4>
            <p>
              Formar docentes capaces para la educación secundaria y
              telesecundaria con valores y actitudes, así como profesionalizar
              al magisterio para dar respuesta a las exigencias educativas de la
              sociedad actual, a través de procesos y servicios de calidad para
              que los egresados respondan con éxito a los desafíos de la
              profesión en contextos estatales, regionales, nacionales e
              internacionales de la sociedad del conocimiento.
            </p>
          </div>
          <div className="vision">
            <h4>Visión</h4>
            <p>
              Mantener el reconocimiento nacional e internacional por la calidad
              académica y de los servicios institucionales para la comunidad de
              aprendizaje desarrollando la capacidad, los valores y actitudes en
              la formación de docentes por medio de la docencia, la
              investigación y la difusión del conocimiento como tareas
              sustantivas que permitan a la comunidad escolar enfrentar con
              éxito los desafíos que la profesión exige en el contexto de la
              sociedad del conocimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
