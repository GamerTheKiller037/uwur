import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import DirectoryFiles from "../../components/DirectoryFiles/DirectoryFiles";
import Footer from "../../components/Footer/Footer";

const Normatividad = () => {
  const directoryItems = [
    {
      id: "plan",
      title: "Plan de Desarrollo Institucional",
      description:
        "Es la planeación estratégica de la Escuela Normal Rural contiene la misión, visión, valores, políticas institucionales, objetivos estratégicos, estrategias, indicadores de desarrollo, así que como estrategias de seguimiento y evaluación que le permitan consolidarse como una Institución de Educación Superior de vanguardia.",
      fileName: "Plan_Desarrollo.pdf",
    },
    {
      id: "manual",
      title:
        'Manual de Organización de la Escuela Normal Rural "Justo Sierra Méndez"',
      description:
        "Instrumento administrativo que se utiliza de apoyo para la correcta coordinación de todas las personas que forman parte de la escuela normal.",
      fileName: "Manual_Organizacion.pdf",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Normatividad" />
        <DirectoryFiles items={directoryItems} />
        <Footer />
      </main>
    </>
  );
};

export default Normatividad;
