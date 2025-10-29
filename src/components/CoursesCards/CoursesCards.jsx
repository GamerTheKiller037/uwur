import React from "react";
import { Link } from "react-router-dom";
import "./CoursesCards.scss";
import maestriaImg from "../../assets/img/maestria-desarrollo.jpg";
import educacionImg from "../../assets/img/educacion.jpg";
import formacionImg from "../../assets/img/formacion-continua.jpg";
import undergraduateIcon from "../../assets/img/undergraduate-icon.svg";
import arrowRight from "../../assets/img/right-arrow--white.svg";

const CoursesCards = () => {
  const courses = [
    {
      id: 1,
      title:
        "Maestría en Desarrollo Profesional Docente (Generación 2024-2025)",
      image: maestriaImg,
      link: "/maestria",
    },
    {
      id: 2,
      title: "Licenciatura en Educación Primaria",
      image: educacionImg,
      link: "/licenciatura",
    },
    {
      id: 3,
      title: "Cursos de Formación Continua",
      image: formacionImg,
      link: "/cursos",
    },
  ];

  return (
    <section className="courses">
      <div className="container">
        <div className="row">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`col-12 col-lg-4 ${index > 0 ? "mt-3 mt-lg-0" : ""}`}
            >
              <div
                className="courses__card"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <img
                  src={undergraduateIcon}
                  alt=""
                  className="courses__card__image"
                />
                <h3>{course.title}</h3>
                <Link to={course.link}>
                  Saber más <img src={arrowRight} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesCards;
