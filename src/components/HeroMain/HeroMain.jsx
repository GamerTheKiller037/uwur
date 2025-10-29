import React from "react";
import "./HeroMain.scss";
import chatWhite from "../../assets/img/chat--white.svg";
import heroImage from "../../assets/img/hero-carousel-2.jpg";

const HeroMain = ({
  subtitle = 'Escuela Normal Rural "Justo Sierra Méndez"',
  title = "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.",
  description = "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
  imageUrl = heroImage,
}) => {
  return (
    <section className="hero ">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="hero__container">
              <h6>{subtitle}</h6>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="hero__cta">
                <a href="">Saber más</a>
                <a href="">
                  <img src={chatWhite} alt="" />
                  <span className="d-flex flex-column justify-content-center ms-3">
                    <span>¿Tienes alguna pregunta?</span>
                    <span>(449) 123 4567</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
            <div className="hero__carousel">
              <img src={imageUrl} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
