import React from "react";
import Header from "../components/Header/Header";
import HeroSecondary from "../components/HeroSecondary/HeroSecondary";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Footer from "../components/Footer/Footer";
import "../scss/Contact.scss";

const Contacto = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Contacto" />
        <div className="contacto-page">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <ContactForm />
              </div>
              <div className="col-md-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contacto;
