import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import CourseList from "../../components/CourseList/CourseList";
import CoursePresentation from "../../components/CoursePresentation/CoursePresentation";

const Cursos = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSecondary
          title="Cursos de formación continua"
          subtitle="Oferta Educativa"
          isBlue
        />
        <CourseList />
        <CoursePresentation />
      </main>
    </>
  );
};

export default Cursos;
