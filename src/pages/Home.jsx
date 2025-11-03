import React, { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import HeroMain from "../components/HeroMain/HeroMain";
import CoursesCards from "../components/CoursesCards/CoursesCards";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import UsefulLinks from "../components/UsefulLinks/UsefulLinks";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (animationsInitialized.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const initAnimations = () => {
      animationsInitialized.current = true;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.from(".hero__carousel img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      });

      tl.from(
        ".hero__container h6",
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        ".hero__container h2",
        {
          x: -50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      );

      tl.from(
        ".hero__container p",
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        ".hero__cta a",
        {
          y: 50,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
        },
        "-=0.5"
      );

      tl.from(
        ".courses__card",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        },
        "-=0.3"
      );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          once: true,
        },
      });

      tl3
        .from(".about h6", {
          y: 50,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".about h3",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".about > .container > .row > div:first-child > p:first-of-type",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".about__perks",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".about__cta",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".about__stats",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );

      gsap.from(".services__header h2, .services__header p", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".services__card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services__cards",
          start: "top 80%",
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".useful-links",
          start: "top 80%",
          once: true,
        },
      });

      tl2
        .from(".useful-links__container h4", {
          opacity: 0,
          y: -50,
          duration: 1,
        })
        .from(
          ".useful-links__container p",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".useful-links__list a",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.3"
        );

      gsap.from(".useful-links__media img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".useful-links",
          start: "top 80%",
          once: true,
        },
      });

      const ctaButtons = document.querySelectorAll(".hero__cta a");
      ctaButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
          });
        });
      });
    };

    const timer = setTimeout(initAnimations, 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroMain />
        <div className="main-content">
          <CoursesCards />
          <AboutSection />
        </div>
        <ServicesSection />
        <UsefulLinks />
        <VideoBanner />
        <Footer />
      </main>
    </>
  );
};

export default Home;
