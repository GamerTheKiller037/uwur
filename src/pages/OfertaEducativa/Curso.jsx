import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import CourseDetail from "../../components/CourseDetail/CourseDetail";

const Curso = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary
          title="Uso de herramientas digitales de aprendizaje para la educación virtual."
          isBlue
        />
        <CourseDetail
          title="Uso de herramientas digitales de aprendizaje para la educación virtual."
          description="La tecnología siempre está presente en nuestras vidas. En la actualidad el uso de las tics ha adquirido un papel fundamental en la Educación. Los participantes desarrollarán sus competencias digitales a través del uso de diferentes herramientas que les permitan favorecer su práctica educativa."
          level="Formación Continua"
          duration="6 meses"
          enrolled={300}
          includes={[
            "Certificado avalado por la SEP",
            "Herramientas: Canva, Genially, Google Suite",
            "Material interactivo",
            "Acceso a plataforma virtual",
          ]}
        />
      </main>
    </>
  );
};

export default Curso;
