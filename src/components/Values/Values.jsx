import React from "react";
import "./Values.scss";
import valuesIcon from "../../assets/img/books-icon--light-blue--bg.svg";

const Values = () => {
  const values = [
    "Responsabilidad",
    "Compromiso",
    "Respeto",
    "Tolerancia",
    "Honestidad",
    "Humanismo",
  ];

  return (
    <section className="values">
      <div className="container">
        <h3 className="text-center">Nuestros valores</h3>
        <div className="values__list">
          {values.map((value, idx) => (
            <div key={idx} className="values__list__item">
              <img src={valuesIcon} alt="" />
              <h5>{value}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
