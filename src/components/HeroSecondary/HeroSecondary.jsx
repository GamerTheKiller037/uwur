import React from "react";
import "./HeroSecondary.scss";

const HeroSecondary = ({ title, subtitle, isBlue = false }) => {
  return (
    <section className={`heroSecondary ${isBlue ? "heroSecondary--blue" : ""}`}>
      <div className="container">
        {subtitle && <p>{subtitle}</p>}
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default HeroSecondary;
