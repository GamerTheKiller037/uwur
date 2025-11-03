import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CourseList.scss";
import { fetchCourses } from "../../api/api.js";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
      setLoading(false);
    };
    loadCourses();
  }, []);

  if (loading) {
    return (
      <section className="course">
        <div className="container">Cargando cursos...</div>
      </section>
    );
  }

  return (
    <section className="course">
      <div className="container">
        <div className="course__content">
          <p className="mt-3">
            Los docentes de las escuelas normales deben estar en constante
            formación para desarrollar y mejorar sus competencias como mediador
            entre los saberes y los estudiantes, para guiar y participar en el
            conocimiento de sus estudiantes, de sus intereses y motivaciones de
            sus procesos de aprendizaje; además de ser un experto en los
            contendidos que enseña, planear, supervisar y evaluar. (SEP, 2017)
          </p>
          <p className="mt-3">
            Por lo anterior, en la Escuela Normal “Justo Sierra Méndez” se
            diseña un plan de trabajo con la finalidad de “Conseguir a las
            personas más aptas para ejercer la docencia; desarrollarlas hasta
            convertirlas en instructores eficientes y garantizar que el sistema
            sea capaz de brindar la mejor instrucción posible a todos los
            niños”. (Barber y Mourshed, 2008, p. 6)
          </p>
          <h4>Propósito General:</h4>
          <p>
            Habilitar a los docentes en servicio por medio del diseño de cursos
            y/o talleres que les permitan actualizarse y capacitarse en los
            fundamentos teóricos-metodológicos del enfoque didáctico en
            educación primaria y la formación de formadores.
          </p>
          <div className="course__content__list">
            <div className="row">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`col-12 col-lg-4 ${
                    index > 0 ? "mt-3 mt-lg-0" : ""
                  }`}
                >
                  <div className="course__content__list__item">
                    <div className="course__content__list__item__media">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="course__content__list__item__content">
                      <h5>{course.title}</h5>
                      <p>
                        <span>Nivel:</span>
                        {course.level}
                      </p>
                      <p>
                        <span>Docente:</span>
                        {course.instructor}
                      </p>
                      <Link to={`/curso/${course.id}`}>Más información</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
