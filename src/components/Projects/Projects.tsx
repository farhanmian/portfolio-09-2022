import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import musicAppImg1 from "../../Assets/img/music-app-2.png";
import musicAppImg2 from "../../Assets/img/music-app-1.png";
import musicAppImg3 from "../../Assets/img/music-app-3.png";

import ecommerceImg1 from "../../Assets/img/ecommerce-app-1.png";
import ecommerceImg2 from "../../Assets/img/ecommerce-app-2.png";
import ecommerceImg3 from "../../Assets/img/ecommerce-app-3.png";

import landingPageImg1 from "../../Assets/img/landing-page-1.png";
import landingPageImg2 from "../../Assets/img/landing-page-2.png";
import landingPageImg3 from "../../Assets/img/landing-page-3.png";

const projectData = [
  {
    projectName: "Music App",
    skill: "Next.Js",
    description: "A Music App using Next.Js and Spotify API",
    siteLink: "https://music-app-liard.vercel.app/",
    images: [musicAppImg1, musicAppImg2, musicAppImg3],
  },
  {
    projectName: "Ecommerce App",
    skill: "Next.Js",
    description: "A Ecommerce App using Next.Js, MUI and Firebase",
    siteLink: "https://ecommerce-app-six.vercel.app/",
    images: [ecommerceImg1, ecommerceImg2, ecommerceImg3],
  },
  {
    projectName: "Landing Page",
    skill: "Next.Js",
    description: "A Landing Page using Next.Js and MUI",
    siteLink: "https://alivio-landing-page-bay.vercel.app/",
    images: [landingPageImg1, landingPageImg2, landingPageImg3],
  },
  // {
  //   projectName: "Movie App",
  //   skill: "React.Js",
  //   description: "A Movie App using React.Js and TheMovieDB API",
  //   type: "web app",
  //   images: [musicAppImg1, musicAppImg2, musicAppImg3],
  // },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const deviceType = window.navigator.userAgent.includes("Mobile");
    setIsMobile(deviceType);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
      const sections = gsap.utils.toArray("#singleProject");

      tl.to("#projectContainer", {
        duration: 5,
        xPercent: -100 * (sections.length - 1),
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#projectContainer",
        start: "center center",
        scrub: true,
        pin: true,
        end: "+=8000",
      });
    });
    return () => ctx.revert();
  }, [isMobile]);

  const hideOverlay = (projectOverlayId: string, projectId: string) => {
    const timeLine = gsap.timeline();
    timeLine.fromTo(
      `#projectBalckOverlay${projectOverlayId}`,
      {
        width: "100%",
      },
      { width: "0", duration: 0.7, ease: "ease-in" }
    );

    ScrollTrigger.create({
      animation: timeLine,
      trigger: `.project${projectId}`,
      start: "top center",
    });
  };

  useEffect(() => {
    if (!isMobile) return;
    hideOverlay("1", "1");
    hideOverlay("2", "2");
    hideOverlay("3", "3");
  }, [isMobile]);

  return (
    <section className={styles.projects}>
      <div
        id="projectContainer"
        className={`${styles.projects_container} ${
          isMobile ? styles["mobile_project-container"] : ""
        }`}
      >
        {projectData.map((item, i) => (
          <div
            id="singleProject"
            key={i}
            className={`${styles.project} project${i + 1}`}
          >
            <div className={styles["project_inner-container"]}>
              <div className={styles.textContainer}>
                <p className={styles.project_no}>
                  0{i + 1}
                  <span
                    id={`projectBalckOverlay${i + 1}`}
                    className={styles.blackOverlay}
                  />
                </p>

                <div>
                  <h2 className={styles.project_name}>
                    {item.projectName}
                    <span
                      id={`projectBalckOverlay${i + 1}`}
                      className={styles.blackOverlay}
                    />
                  </h2>

                  <h6
                    id={`projectHeading${i + 1}`}
                    className={styles.project_skill}
                  >
                    Frontend Developer
                    <span className={styles["project_skill-ball"]} />
                    {item.skill}
                    <span
                      id={`projectBalckOverlay${i + 1}`}
                      className={styles.blackOverlay}
                    />
                  </h6>
                  <p className={styles.project_description}>
                    {item.description}
                    <span
                      id={`projectBalckOverlay${i + 1}`}
                      className={styles.blackOverlay}
                    />
                  </p>
                </div>

                <a
                  href={item.siteLink}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.project_link}
                >
                  View Site
                  <span
                    id={`projectBalckOverlay${i + 1}`}
                    className={styles.blackOverlay}
                  />
                </a>
              </div>

              <div className={styles.images_Container}>
                {item.images.map((image, i) => (
                  <img
                    className={`${styles.project_img} ${
                      styles[`productImg${i + 1}`]
                    }`}
                    key={i}
                    src={image}
                    alt="img"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
