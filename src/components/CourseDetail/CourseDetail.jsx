import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetail.scss";
import { fetchCourses } from "../../api/api.js";
import levelsIcon from "../../assets/img/levels-icon--red.svg";
import timeIcon from "../../assets/img/time-icon--red.svg";
import studentsIcon from "../../assets/img/students-icon--red.svg";
import checkIcon from "../../assets/img/check-icon--red.svg";
import chatBlue from "../../assets/img/chat--blue.svg";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      const courses = await fetchCourses();
      const foundCourse = courses.find((c) => c.id === parseInt(id));
      setCourse(foundCourse);
      setLoading(false);
    };
    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <section className="masters">
        <div className="container">
          <div className="text-center py-5">Cargando...</div>
        </div>
      </section>
    );
  }

  if (!course) {
    return (
      <section className="masters">
        <div className="container">
          <div className="text-center py-5">Curso no encontrado</div>
        </div>
      </section>
    );
  }

  const includes = [
    "Certificado avalado por la SEP.",
    "Herramientas: Canva, Genially, Google Suite",
    "Material interactivo",
    "Acceso a plataforma virtual",
  ];

  return (
    <section className="masters">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="masters__content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="masters__details">
              <p>
                <img src={levelsIcon} alt="" />
                {course.level}
              </p>
              <p>
                <img src={timeIcon} alt="" />
                Duración de {course.duration}
              </p>
              <p>
                <img src={studentsIcon} alt="" />
                Se han inscrito {course.enrolled} personas
              </p>
              <h5>Curso incluye:</h5>
              {includes.map((item, idx) => (
                <p key={idx}>
                  <img src={checkIcon} alt="" />
                  {item}
                </p>
              ))}
              <a href="">
                <img src={chatBlue} alt="" />
                <span className="d-flex flex-column justify-content-center ms-3">
                  <span>¿Tienes alguna pregunta?</span>
                  <span>(449) 123 4567</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
