import React from "react";
import Header from "../../components/Header/Header";
import HeroSecondary from "../../components/HeroSecondary/HeroSecondary";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";

const OrganizacionEscolar = () => {
  const subManagers = [
    {
      title: "Subdirección Académica",
      name: "Ma.Trinidad Marín Aguilar",
      description:
        "Es el área que coordina los procedimientos de todas las áreas, departamentos y coordinaciones para dar respuesta a todos los asuntos relacionados con la organización de las actividades académicas para el cumplimiento de los planes y programas de estudio, atendiendo a la normatividad vigente y a las necesidades del sector educativo.",
      email: "subdiracademica@enrjsm.edu.mx",
      phone: "(449) 9675049",
    },
    {
      title: "Subdirección Administrativa",
      name: "Luis Uriel Barajas Rodríguez",
      description:
        "Las funciones esenciales de la subdirección administrativa; es la de conducir, coordinar, gestionar y dar seguimiento a los procesos relacionados con los recursos humanos y materiales, así como la administración de los bienes y servicios de la institución educativa, lo que permite garantizar su adecuado funcionamiento.",
      email: "subdiradministrativa@enrjsm.edu.mx",
      phone: "(449) 9675049",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSecondary title="Organización Escolar de la Escuela Normal" />
        <Team
          title="Dirección"
          description="Dirigir la Escuela Normal Rural 'Justo Sierra Méndez' en sus actividades académicas y administrativas a través de la vinculación con las diversas áreas de la institución, con instancias de gobierno e iniciativa privada para el logro de los objetivos estratégicos."
          manager={{
            name: "Lluvia Ofelia Palomino Robledo",
            email: "direccion@enrjsm.edu.mx",
            phone: "(449) 9675049",
          }}
          subManagers={subManagers}
        />
        <Footer />
      </main>
    </>
  );
};

export default OrganizacionEscolar;
