import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import EventsList from "../../components/EventsList/EventsList";

const Eventos = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Eventos" />
        <EventsList />
      </main>
    </>
  );
};

export default Eventos;
