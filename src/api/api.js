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
          'Estudio de egresadas de la escuela Normal Rural "Justo Sierra Méndez"',
        image: pubImg1,
        description:
          "Generación 2012-2016. La generalización del Plan de estudios 2012. Análisis de la formación docente y su impacto en la educación regional.",
        downloadLink: "/documents/estudio-egresadas-2012-2016.pdf",
      },
      {
        id: 2,
        title: "Entre la formación ideológica y la renovación moral",
        image: pubImg2,
        description:
          "Sergio Ortiz Briano - Análisis de producciones escritas de estudiantes normalistas rurales. Estudio sobre la identidad normalista.",
        downloadLink: "/documents/formacion-ideologica-renovacion.pdf",
      },
    ];
  } catch (error) {
    console.error("Error fetching publications:", error);
    return [];
  }
};
