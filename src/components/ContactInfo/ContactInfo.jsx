import React from "react";
import fbIcon from "../../assets/img/fb-icon--white.svg";
import igIcon from "../../assets/img/ig-icon--white.svg";
import "./ContactInfo-styles.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Información de contacto</h3>

      <div className="contact-info__school">
        <h4>Escuela Normal Rural "Justo Sierra Méndez"</h4>
      </div>

      <div className="contact-info__details">
        <p className="contact-info__address">
          Emilio Rangel No. 208 José Ma. Morelos y Pavón.
          <br />
          Aguascalientes, CP 20320
        </p>

        <p className="contact-info__phone">(449) 967 5049</p>

        <p className="contact-info__email">contacto@enrjsm.edu.mx</p>

        <p className="contact-info__hours">Lun - Vie 9:00 A.M. - 5:00 P.M.</p>
      </div>

      <div className="contact-info__social">
        <h5>Redes Sociales</h5>
        <div className="contact-info__social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={igIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
