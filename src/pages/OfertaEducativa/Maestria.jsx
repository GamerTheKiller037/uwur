import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import levelsIcon from "../../assets/img/levels-icon--red.svg";
import timeIcon from "../../assets/img/time-icon--red.svg";
import studentsIcon from "../../assets/img/students-icon--red.svg";
import checkIcon from "../../assets/img/check-icon--red.svg";
import chatBlue from "../../assets/img/chat--blue.svg";
import fileIcon from "../../assets/img/file.svg";
import "../../components/CourseDetail/CourseDetail.scss";
import Footer from "../../components/Footer/Footer";

const Maestria = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Maestría" subtitle="Oferta Educativa" isBlue />
        <section className="masters">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-8">
                <div className="masters__content">
                  <h3>
                    Maestría en Competencias para la Formación Docente (MCFD)
                  </h3>
                  <p>
                    El propósito de la MCFD es favorecer el desarrollo de
                    competencias profesionales de directores y profesores de
                    educación básica, media superior y superior a partir de la
                    intervención educativa y la investigación-innovación. El
                    propósito es la revisión y reconstrucción de un pensamiento
                    crítico sobre la propia práctica, con la finalidad de
                    promover la comprensión e interpretación de la realidad
                    educativa y en consecuencia la producción de conocimiento.
                  </p>

                  <h5>Características del programa:</h5>
                  <p>
                    Esta maestría profesionalizante se trabaja en dos
                    modalidades: presencial (sábados de 08:00 a 14:00 horas) y
                    en línea. La MCFD comprende tres campos de formación: a)
                    Investigación e innovación educativa; b) Intervención
                    educativa en la formación integral y el pensamiento
                    complejo; y c) Mediación en la reflexión, construcción y
                    desarrollo de proyectos socioformativos.
                  </p>

                  <h5>Competencias de egreso:</h5>
                  <p>
                    Al concluir la MCFD los egresados del programa deberán
                    mostrar las siguientes competencias: A) Autogestionan la
                    propia formación continua a lo largo de su vida para
                    desarrollar una docencia estratégica acorde con las
                    necesidades actuales de su contexto. B) Comunican sus ideas
                    de manera oral, escrita y asertiva en distintos contextos
                    sociales, laborales, culturales y pedagógicos, para promover
                    la cooperación acorde con los requerimientos de las
                    situaciones. C) Promueven procesos colaborativos y lideran
                    propuestas para resolver problemas de su práctica
                    profesional con actitud ética. D) Gestionan el conocimiento
                    a partir del desarrollo del pensamiento complejo con
                    pertinencia, flexibilidad, multidimensionalidad, comprensión
                    de la identidad humana, globalidad y sentido ecológico para
                    la resolución de problemas. E) Resuelven problemas de su
                    práctica profesional con una metodología de investigación
                    para generar conocimiento considerando los saberes
                    acumulados, el compromiso ético y el trabajo colaborativo.
                  </p>

                  <h5>
                    Enfoque de la Maestría en Competencias para la Formación
                    Docente:
                  </h5>
                  <p>
                    El enfoque de la MCFD es socioformativo, el cual se
                    caracteriza por poner énfasis en formar y fortalecer el
                    proyecto ético de vida, el emprendimiento creativo y las
                    competencias desde una concepción del pensamiento complejo,
                    a través de una formación que considere el análisis de
                    procesos, la investigación-acción educativa y los procesos
                    de desempeño.
                  </p>

                  <div className="masters__content__files">
                    <h5>Archivos descargables:</h5>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={fileIcon} alt="" />
                      Convocatoria ingreso generación 2021-2023
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={fileIcon} alt="" />
                      Criterios de permanencia y egreso de la MCFD
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xl-4">
                <div className="masters__details">
                  <p>
                    <img src={levelsIcon} alt="" />
                    Nivel de educación mínimo requerido
                  </p>
                  <p>
                    <img src={timeIcon} alt="" />
                    Duración de 6 meses
                  </p>
                  <p>
                    <img src={studentsIcon} alt="" />
                    Se han inscrito 300 personas
                  </p>
                  <h5>Curso incluye:</h5>
                  <p>
                    <img src={checkIcon} alt="" />
                    Certificado avalado por la SEP.
                  </p>
                  <p>
                    <img src={checkIcon} alt="" />
                    Ulputate eget, arcu. In enim justo.
                  </p>
                  <p>
                    <img src={checkIcon} alt="" />
                    Ulputate eget, arcu. In enim justo.
                  </p>
                  <p>
                    <img src={checkIcon} alt="" />
                    Ulputate eget, arcu. In enim justo.
                  </p>

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
        <Footer />
      </main>
    </>
  );
};

export default Maestria;
