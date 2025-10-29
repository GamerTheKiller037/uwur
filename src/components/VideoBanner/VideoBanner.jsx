import React from "react";
import "./VideoBanner.scss";
import videoBanner from "../../assets/img/video-banner.jpg";
import videoBannerMobile from "../../assets/img/video-banner--mobile.jpg";

const VideoBanner = () => {
  return (
    <section className="video-banner">
      <img
        src={videoBanner}
        className="img-fluid d-none d-md-block"
        alt="Video Banner"
      />
      <img
        src={videoBannerMobile}
        className="img-fluid d-block d-md-none"
        alt="Video Banner Mobile"
      />
    </section>
  );
};

export default VideoBanner;
