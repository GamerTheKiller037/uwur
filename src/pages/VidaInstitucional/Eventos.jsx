import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import EventsList from "../../components/EventsList/EventsList";
import Footer from "../../components/Footer/Footer";

const Eventos = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Eventos" />
        <EventsList />
        <Footer />
      </main>
    </>
  );
};

export default Eventos;
