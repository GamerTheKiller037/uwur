import React from "react";
import AnnouncementCarousel from "../AnnouncementCarousel/AnnouncementCarousel";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = ({
  announcements = [
    {
      id: 1,
      text: "Último día para pago de exámenes extraordinarios 05 Enero 2024",
    },
    { id: 2, text: "Último día para pago de cursos 05 Enero 2024" },
    { id: 3, text: "Último día para pago de inscripciones 05 Enero 2024" },
  ],
}) => {
  return (
    <header>
      <AnnouncementCarousel announcements={announcements} />
      <Navbar />
    </header>
  );
};

export default Header;
