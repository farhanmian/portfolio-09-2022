import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../Assets/img/music-app-2.png";
import img2 from "../../Assets/img/music-app-1.png";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#textContainer",
      pin: true,
      start: "center center",
      end: "+=3000",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectContainer",
        scrub: true,
        start: "top bottom",
      },
    });
    tl.from("#img1", { y: "400vh" });
    tl.fromTo("#img2", { x: 800, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);
  return (
    <section className={styles.projects}>
      <div id="projectContainer" className={styles.projects_innerContainer}>
        {/* text container */}
        <div id="textContainer" className={styles.textContainer}>
          <p className={styles.project_no}>01</p>

          <div>
            <h2 className={styles.project_name}>Music App</h2>
            <h6 className={styles.project_skill}>
              Frontend Developer
              <span className={styles["project_skill-ball"]} />
              Next.Js
            </h6>
            <p className={styles.project_description}>
              A Music App using Next.Js and Spotify API
            </p>
          </div>

          <p className={styles.project_type}>Web App</p>
        </div>

        {/* images container */}
        <div className={styles.images_Container}>
          <img id="img1" className={styles.img2} src={img1} alt="img1" />
          <img id="img2" className={styles.img1} src={img2} alt="img2" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
