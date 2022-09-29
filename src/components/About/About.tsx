import React, { useEffect } from "react";
import styles from "./About.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#heading", {
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        scrub: true,
      },
      x: "-30vw",
    });
  }, []);

  return (
    <section id="aboutSection" className={styles.about}>
      <div className={styles.about_innerContainer}>
        <h1 id="heading" className={styles["about_innerContainer-heading"]}>
          About Me
        </h1>
        <p className={styles["about_innerContainer-text"]}>
          Front-end developer who cares deeply about user experience. and Prefer
          to keep learning, continue challenging Myself, and do interesting
          things that matter..
        </p>
      </div>
    </section>
  );
};

export default About;
