import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#heading", {
      scrollTrigger: {
        trigger: "#skillsSection",
        start: "center bottom",
        scrub: true,
      },
      x: "30vw",
    });
  }, []);

  return (
    <section id="skillsSection" className={styles.section}>
      <div className={styles.inner_container}>
        <div className={styles.text_container}>
          <p>
            Frontend, React.Js and
            <br />
            React-Native
            <br />
            Developer
          </p>
          <div>
            <p>Figma</p>
            <p>Adobe XD</p>
          </div>
        </div>

        <div className={styles.text_container}>
          <p>
            Responsive & Adaptive Design
            <br /> UI Maintenance
          </p>

          <div>
            <p>React</p>
            <p>React Native</p>
            <p>Next</p>
            <p>TypeScript</p>
          </div>
        </div>
      </div>

      <h1 id="heading" className={styles.skills_heading}>
        Skills
      </h1>
    </section>
  );
};

export default Skills;
