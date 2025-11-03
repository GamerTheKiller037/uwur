import React, { useState } from "react";
import "./DirectoryFiles.scss";
import fileIcon from "../../assets/img/file.svg";
import arrowRight from "../../assets/img/arrow-right--short.svg";

const DirectoryFiles = ({ items }) => {
  const [selectedId, setSelectedId] = useState(items[0]?.id || "");

  const handleMenuClick = (id, e) => {
    e.preventDefault();
    setSelectedId(id);

    if (window.innerWidth < 992) {
      const element = document.getElementById(`content-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="directoryFiles">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="directoryFiles__menu">
              <div className="directoryFiles__menu__header">
                <h5>Menú</h5>
              </div>
              <div className="directoryFiles__menu__content">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleMenuClick(item.id, e)}
                    className={selectedId === item.id ? "active" : ""}
                  >
                    {item.title}
                    <img src={arrowRight} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 mt-3 mt-lg-0">
            <div className="directoryFiles__content">
              {items.map((item) => (
                <div
                  key={item.id}
                  id={`content-${item.id}`}
                  className={`directoryFiles__content__item ${
                    selectedId === item.id ? "active" : ""
                  }`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={item.downloadLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={fileIcon} alt="" />
                    Descargar documento
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectoryFiles;
