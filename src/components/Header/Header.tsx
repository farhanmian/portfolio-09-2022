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
    <section className={styles.header}>
      <div className={styles.header_innerContainer}>
        <h1 id="slideIn" className={styles["header_innerContainer-name"]}>
          Farhan Hussain
        </h1>
        <h2 id="slideIn" className={styles["header_innerContainer-role"]}>
          Front-end Developer
        </h2>
      </div>
    </section>
  );
};

export default Header;
