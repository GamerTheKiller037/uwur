import React, { useState, useEffect } from "react";
import "./PublicationsList.scss";
import { fetchPublications } from "../../api/api.js";
import fileIcon from "../../assets/img/file.svg";

const PublicationsList = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPublications = async () => {
      const data = await fetchPublications();
      setPublications(data);
      setLoading(false);
    };
    loadPublications();
  }, []);

  if (loading) {
    return (
      <section className="publications">
        <div className="container">
          <div className="text-center py-5">Cargando publicaciones...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="publications">
      <div className="container">
        {publications.map((pub) => (
          <div key={pub.id} className="publications__item">
            <img src={pub.image} alt={pub.title} />
            <div>
              <h3>{pub.title}</h3>
              <p>{pub.description}</p>
              <a
                href={pub.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fileIcon} alt="" />
                Descargar documento
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsList;
