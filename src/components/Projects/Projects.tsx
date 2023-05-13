import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../Assets/img/music-app-2.png";
import img2 from "../../Assets/img/music-app-1.png";
import img3 from "../../Assets/img/music-app-3.png";

const projectData = [
  {
    projectName: "Music App",
    skill: "Next.Js",
    description: "A Music App using Next.Js and Spotify API",
    type: "web app",
    images: [img1, img2, img3],
  },
  {
    projectName: "Ecommerce App",
    skill: "Next.Js",
    description: "A Ecommerce App using Next.Js, MUI and Firebase",
    type: "web app",
    images: [img1, img2, img3],
  },
  {
    projectName: "Movie App",
    skill: "React.Js",
    description: "A Movie App using React.Js and TheMovieDB API",
    type: "web app",
    images: [img1, img2, img3],
  },
  {
    projectName: "Landing Page",
    skill: "Next.Js",
    description: "A Landing Page using Next.Js and MUI",
    type: "web app",
    images: [img1, img2, img3],
  },
];

const Projects = () => {
  useEffect(() => {
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
  }, []);

  return (
    <section className={styles.projects}>
      <div id="projectContainer" className={styles.projects_container}>
        {projectData.map((item, i) => (
          <div id="singleProject" key={i} className={styles.project}>
            <div className={styles["project_inner-container"]}>
              <div className={styles.textContainer}>
                <p className={styles.project_no}>0{i + 1}</p>

                <div>
                  <h2 className={styles.project_name}>{item.projectName}</h2>
                  <h6 className={styles.project_skill}>
                    Frontend Developer
                    <span className={styles["project_skill-ball"]} />
                    {item.skill}
                  </h6>
                  <p className={styles.project_description}>
                    {item.description}
                  </p>
                </div>

                <p className={styles.project_type}>{item.type}</p>
              </div>

              <div className={styles.images_Container}>
                {item.images.map((image, i) => (
                  <img
                    className={styles.project_img}
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

{
  /* <div id="projectContainer2" className={styles.projects_innerContainer}>
  <div id="textContainer2" className={styles.textContainer}>
    <p className={styles.project_no}>02</p>

    <div>
      <h2 className={styles.project_name}>Testing App</h2>
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

 
  <div className={styles.images_Container}>
    <img id="img1-2" className={styles.img2} src={img1} alt="img1" />
    <img id="img2-2" className={styles.img1} src={img2} alt="img2" />
    <img id="img3-2" className={styles.img3} src={img3} alt="img3" />
  </div>
</div>; */
}
