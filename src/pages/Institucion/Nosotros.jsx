import React from "react";
import Header from "../../components/Header/Header";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import AboutHistory from "../../components/AboutHistory/AboutHistory";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MissionVision from "../../components/MissionVision/MissionVision";
import Values from "../../components/Values/Values";
import AboutInfo from "../../components/AboutInfo/AboutInfo";

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
      </main>
    </>
  );
};

export default Nosotros;
