import React, { useState, useEffect } from "react";
import "./EventsList.scss";
import { fetchEvents } from "../../api/api.js";
import locationIcon from "../../assets/img/location--red.svg";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
      setLoading(false);
    };
    loadEvents();
  }, []);

  if (loading) {
    return (
      <section className="events">
        <div className="container">
          <div className="text-center py-5">Cargando eventos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="events">
      <div className="container">
        <p style={{ textAlign: "justify" }}>
          El desarrollo de las actividades se vincula con los diversos sectores
          de la comunidad, al mismo tiempo contribuye a la formación integral de
          las alumnas y da pertinencia a la docencia e investigación que se
          realiza en esta institución.
        </p>
        <p className="mt-4" style={{ textAlign: "justify" }}>
          Ofrece servicios con calidad, incorporados a los planes de estudio que
          permiten una educación integral para las futuras docentes y está
          dedicado a dar a conocer los criterios y lineamientos para la
          elaboración de proyectos de difusión cultural y extensión educativa,
          así como favorecer y facilitar los mecanismos para su operación.
        </p>

        <div className="events__list">
          <div className="row">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`col-12 col-md-6 col-lg-4 ${
                  index > 0 ? "mt-4 mt-md-0" : ""
                }`}
              >
                <div className="events__list__item">
                  <img src={event.image} alt={event.title} />
                  <div className="events__list__item__content">
                    <p className="label">
                      {event.type === "videoconferencia"
                        ? "Videoconferencia"
                        : "Presencial"}
                    </p>
                    <p>
                      <span>Fecha:</span> {event.date}
                    </p>
                    <h5>{event.title}</h5>
                    {event.type === "videoconferencia" && event.zoomLink ? (
                      <a
                        href={event.zoomLink}
                        className="video-call"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Unirse a la reunión Zoom
                      </a>
                    ) : (
                      <a href="#">
                        <img src={locationIcon} alt="" />
                        {event.location || "Ubicación por confirmar"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsList;
