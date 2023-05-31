import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.from("#slideIn", {
      y: 50,
      height: 0,
      overflow: "hidden",
      duration: 0.8,
      stagger: 0.75,
    });
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.header_innerContainer}>
        <div className={styles.text_container}>
          <h1 id="slideIn" className={styles.name}>
            Farhan Hussain
          </h1>
          <h2 id="slideIn" className={styles.role}>
            Front-end Developer
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
