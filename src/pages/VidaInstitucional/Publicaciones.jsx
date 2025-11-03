import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import PublicationsList from "../../components/PublicationsList/PublicationsList";
import Footer from "../../components/Footer/Footer";

const Publicaciones = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Publicaciones" />
        <PublicationsList />
        <Footer />
      </main>
    </>
  );
};

export default Publicaciones;
