import React, { useState, useEffect } from "react";
import "./AnnouncementCarousel.scss";

const AnnouncementCarousel = ({ announcements }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (announcements.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + announcements.length) % announcements.length
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % announcements.length);
  };

  if (announcements.length === 0) return null;

  return (
    <div className="announcementsCarousel">
      <div className="carousel-inner">
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className={`carousel-item ${index === current ? "active" : ""}`}
          >
            <h6>{announcement.text}</h6>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default AnnouncementCarousel;
