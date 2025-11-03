import React, { useState } from "react";
import "./ContactForm-styles.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    telefono: "",
    ofertaEducativa: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setFormData({
      nombreCompleto: "",
      correoElectronico: "",
      telefono: "",
      ofertaEducativa: "",
      mensaje: "",
    });
  };

  return (
    <div className="contact-form">
      <h2>Ponte en contacto con nosotros.</h2>
      <p className="contact-form__description">
        Comunícate a los teléfonos que se encuentran disponibles en el
        encabezado de la página o bien manda mediante un correo electrónico tus
        dudas para que sean respondidas a la brevedad posible, recuerda
        seleccionar en la pestaña oferta educativa a quien quieres mandar tus
        dudas y/ o comentarios.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombreCompleto">Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correoElectronico">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ofertaEducativa">Selecciona oferta educativa</label>
          <select
            className="form-control"
            id="ofertaEducativa"
            name="ofertaEducativa"
            value={formData.ofertaEducativa}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="licenciatura">Licenciatura</option>
            <option value="maestria">Maestría</option>
            <option value="doctorado">Doctorado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            rows="6"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
