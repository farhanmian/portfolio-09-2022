import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import GitHubIcon from "../icons/GitHubIcon";
import MailIcon from "../icons/MailIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const icons = [
  <GitHubIcon key="github" />,
  <MailIcon key="mail" />,
  <LinkedinIcon key="linkedin" />,
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
          <a key={i}>{item}</a>
        ))}
        <h1 id="contactHeading" className={styles.heading}>
          Contact
        </h1>
      </div>
    </section>
  );
};

export default Contact;
