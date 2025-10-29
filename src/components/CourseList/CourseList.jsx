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
          <h4>Propósito General:</h4>
          <p>
            Habilitar a los docentes en servicio por medio del diseño de cursos
            y/o talleres
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
