import React from "react";
import Header from "../../components/Header/Header";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import AboutHistory from "../../components/AboutHistory/AboutHistory";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MissionVision from "../../components/MissionVision/MissionVision";
import Values from "../../components/Values/Values";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import Footer from "../../components/Footer/Footer";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main>
        <HeroAbout />
        <AboutHistory />
        <HeroBanner />
        <MissionVision />
        <Values />
        <AboutInfo />
        <Footer />
      </main>
    </>
  );
};

export default Nosotros;
