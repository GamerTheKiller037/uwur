import React from "react";
import "./HeroBanner.scss";
import aboutBanner from "../../assets/img/about-banner.jpg";

const HeroBanner = () => {
  return (
    <section
      className="about__banner"
      style={{ backgroundImage: `url(${aboutBanner})` }}
    ></section>
  );
};

export default HeroBanner;
