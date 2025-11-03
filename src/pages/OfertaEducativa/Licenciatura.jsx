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

const Licenciatura = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary
          title="Licenciatura"
          subtitle="Oferta Educativa"
          isBlue
        />
        <section className="masters">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-8">
                <div className="masters__content">
                  <h3>Licenciatura en Educación Primaria Plan 2018</h3>
                  <p>
                    El Plan de Estudios se sustenta en las tendencias más
                    recientes de la formación docente; en las diversas
                    perspectivas teórico-metodológicas de las disciplinas que
                    son objeto de enseñanza en la educación básica y de aquellas
                    que explican el proceso educativo.
                  </p>

                  <p>
                    Asimismo, se sostiene en los marcos normativos y pedagógicos
                    establecidos en el Modelo Educativo para la Educación
                    Obligatoria.
                  </p>

                  <p className="blue">
                    En los desafíos que enfrenta la formación de maestros en las
                    Escuelas Normales, en tanto instituciones de educación
                    superior; en la naturaleza y desarrollo de las prácticas
                    pedagógicas actuales y las emergentes, ante los nuevos
                    problemas que el maestro enfrenta como resultado de los
                    múltiples cambios que en lo social, cultural, económico,
                    tecnológico y educativo experimenta nuestra sociedad e
                    impactan de manera notable en el servicio educativo, en las
                    instituciones y en los propios profesionales de la
                    educación.
                  </p>

                  <h5>Servicio social:</h5>
                  <p>
                    En cumplimiento de la normatividad vigente, el servicio
                    social que el estudiante normalista prestará a la sociedad
                    como retribución a la oportunidad de acceso a la educación
                    superior, se cumplirá a través de las actividades realizadas
                    en los espacios curriculares correspondientes a las
                    prácticas profesionales efectuadas en el sexto, séptimo y
                    octavo semestres, con una duración de 480 horas. Se propone
                    el desarrollo de actividades profesionales de carácter
                    docente en las escuelas primarias. Una vez concluido el
                    periodo establecido, la autoridad de la escuela primaria
                    emitirá la constancia de cumplimiento del servicio social,
                    la cual será entregada a la Escuela Normal para expedir la
                    carta de liberación.
                  </p>

                  <h5>Prácticas profesionales:</h5>
                  <p>
                    Las prácticas profesionales ofrecen la oportunidad de
                    organizar comunidades de aprendizaje en las que tiene tanto
                    valor el conocimiento y experiencia del docente de la
                    Escuela Normal, como del maestro titular de las escuelas
                    primarias y el estudiante normalista, bajo el supuesto de
                    que el saber y el conocimiento sólo se movilizan si se
                    colocan en el plano del diálogo, el debate y el análisis
                    conjunto. De esta manera, las prácticas profesionales
                    permitirán construir estrategias de acompañamiento
                    específico por parte de los docentes formadores y de los
                    maestros de las escuelas primarias. A través de las
                    prácticas profesionales se establecen los vínculos con la
                    comunidad, así como con los diferentes agentes educativos.
                  </p>

                  <h5>Modalidades de titulación:</h5>
                  <p>
                    Las alumnas pueden recibir su título de la licenciatura
                    desarrolando cualquiera de las tres siguientes modalidades
                    de titulación: a) El portafolio de evidencias y examen
                    profesional b) El Informe de prácticas profesionales y
                    examen profesional c) La Tesis de investigación y examen
                    profesional. El Portafolio de evidencias y examen
                    profesional Consiste en la elaboración de un documento que
                    reconstruye el proceso de aprendizaje del estudiante a
                    partir de un conjunto de evidencias reflexionadas,
                    analizadas, evaluadas y organizadas según la relevancia,
                    pertinencia y representatividad respecto a las competencias
                    genéricas y profesionales establecidas en el perfil de
                    egreso, con la intención de dar cuenta de su nivel de logro
                    o desempeño en el ámbito de la profesión docente. El Informe
                    de prácticas profesionales y examen profesional Consiste en
                    la elaboración de un informe analítico-reflexivo del proceso
                    de intervención que realizó en su periodo de práctica
                    profesional, que se elabora en el tiempo curricular
                    establecido en el Plan de Estudios vigente, de tal forma que
                    el proceso de titulación no implica más tiempo ni recursos,
                    una vez concluidos los estudios profesionales. La Tesis de
                    investigación y examen profesional Consiste en la
                    elaboración y desarrollo de un proyecto de investigación que
                    culminará con la presentación de una tesis que da cuenta del
                    proceso metodológico realizado y los resultados obtenidos.
                    Al igual que la opción anterior se lleva a cabo en el tiempo
                    curricular establecido en el Plan de Estudios. La estudiante
                    normalista podrá seleccionar el tema de investigación con
                    base en las problemáticas que haya detectado en su formación
                    inicial y sobre los cuales pretenda ampliar su conocimiento.
                  </p>

                  <div className="masters__content__files">
                    <h5>Archivos descargables:</h5>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={fileIcon} alt="" />
                      Malla Curricular
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

export default Licenciatura;
