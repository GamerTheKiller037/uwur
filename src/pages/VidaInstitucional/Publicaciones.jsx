import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import PublicationsList from "../../components/PublicationsList/PublicationsList";

const Publicaciones = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Publicaciones" />
        <PublicationsList />
      </main>
    </>
  );
};

export default Publicaciones;
