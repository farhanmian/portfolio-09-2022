import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import GitHubIcon from "../icons/GitHubIcon";
import MailIcon from "../icons/MailIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const icons = [
  { icon: <GitHubIcon key="github" />, link: "https://github.com/farhanmian" },
  { icon: <MailIcon key="mail" />, link: "mailto:farhanmian099@gmail.com" },
  {
    icon: <LinkedinIcon key="linkedin" />,
    link: "https://www.linkedin.com/in/farhan-mian-7aa5b21a3/",
  },
];

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#contactHeading", {
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top bottom",
        scrub: true,
      },
      duration: 2000,
      left: "10%",
      ease: "ease-in",
    });
  }, []);

  return (
    <section id="contactSection" className={styles.section}>
      <div className={styles.contact_innerContainer}>
        {icons.map((item, i) => (
          <a href={item.link} target="_blank" rel="noreferrer" key={i}>
            {item.icon}
          </a>
        ))}
        <h1 id="contactHeading" className={styles.heading}>
          Contact
        </h1>
      </div>
    </section>
  );
};

export default Contact;
