import axios from "axios";
import courseImg from "../assets/img/curso-1.jpg";
import eventImg1 from "../assets/img/event-1.jpg";
import eventImg2 from "../assets/img/event-2.jpg";
import pubImg1 from "../assets/img/publicacion-1.jpg";
import pubImg2 from "../assets/img/publicacion-2.jpg";

export const fetchCourses = async () => {
  //   const response = await axios.get(
  //     `https://api.hola);
  //   return response.data;
  // };

  try {
    return [
      {
        id: 1,
        title:
          "Uso de herramientas digitales de aprendizaje para la educación virtual.",
        level: "Formación Continua",
        instructor:
          "Dr. Guillermo Parga Guillén, Mtra. Paola Cristina Pulido Moreno, Lic. Zalma Itzel Flores Cisneros",
        image: courseImg,
      },
      {
        id: 2,
        title:
          "Uso de herramientas digitales de aprendizaje para la educación virtual.",
        level: "Formación Continua",
        instructor:
          "Dr. Guillermo Parga Guillén, Mtra. Paola Cristina Pulido Moreno, Lic. Zalma Itzel Flores Cisneros",
        image: courseImg,
      },
    ];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    return [
      {
        id: 1,
        title: 'Club de lecturas "Las Pupilas"',
        image: eventImg1,
        date: "12 Febrero 2025",
        description: "Videoconferencia sobre club de lecturas",
        type: "videoconferencia",
      },
      {
        id: 2,
        title: 'Reglamento de la Biblioteca "Ignacio Ramírez"',
        image: eventImg2,
        date: "20 Febrero 2025",
        description: "Evento presencial",
        type: "presencial",
        location: "Salón de usos múltiples",
      },
    ];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchPublications = async () => {
  try {
    return [
      {
        id: 1,
        title:
          'Estudio de egresadas de la escuela Normal Rural "Justo Sierra Méndez": Generación 2012-2016. La generalización del Plan de estudios 2012.',
        image: pubImg1,
        description:
          "Hoy en día el tema de estudio de egresados para las Escuelas Normales representa una práctica de investigación que les permite evaluar sus programas educativos, su desempeño institucional desde los ámbitos de la gestión, el académico, el administrativo y el de servicios; evaluación que se realiza desde la mirada del egresado a través de su propia condición profesional y laboral, de su inserción al campo laboral, de su desempeño profesional, de sus percepciones y necesidades formativas y académicas que identifica, lo cual se traduce en el reconocimiento de las fortalezas y áreas de mejora con que cuentan las instituciones formadoras de maestras y maestros en su labor histórica de formar a los futuros profesionales de la educación básica.",
        downloadLink: "/documents/estudio-egresadas-2012-2016.pdf",
      },
      {
        id: 2,
        title:
          "Entre la formación ideológica y la renovación moral. Sergio Ortiz Briano.",
        image: pubImg2,
        description:
          'En el presente estudio nos valemos del análisis de producciones escritas de estudiantes normalistas rurales, para advertir cómo se asumieron como representantes e interlocutores del Gobierno de la época ante las comunidades educativas y la zona de influencia de estas escuelas, pero conservando, en algunos casos, aspectos representativos de la ideología oficial promovida durante la década de 1930, misma que llegó a ser característica de este tipo de instituciones, por lo que, más que tratarse de un poder ejercido sobre los textos, nos encontramos frente al "poder ejercido mediante el uso de los textos". En este sentido, podemos considerar que, al ingresar como estudiantes a estas escuelas, los jóvenes campesinos conforman una categoría social en la que, en tanto se identifican como interlocutores de las autoridades, también se alejan paulatinamente del campesinado.',
        downloadLink: "/documents/formacion-ideologica-renovacion.pdf",
      },
    ];
  } catch (error) {
    console.error("Error fetching publications:", error);
    return [];
  }
};
