import Link from "next/link";
import styles from "./Overlay.module.css";
import { useEffect, useRef, useState } from "react";
import Router from "next/router";

// Animation GSAP
import { TweenMax, TimelineMax, Power3 } from "gsap";

const Overlay = () => {
  let overlayContainer = useRef(null);
  let overlayLogo = useRef(null);
  let overlayText = useRef(null);

  useEffect(() => {
    TweenMax.to(overlayContainer, 1.6, {
      height: 0,
      ease: Power3.easeInOut,
      delay: 3.4,
    });
    TweenMax.from(overlayLogo, 2.8, {
      opacity: 0,
      y: -100,
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenMax.to(overlayLogo, 0.8, {
      opacity: 0,
      ease: Power3.easeOut,
      delay: 3.6,
    });
    TweenMax.to(overlayLogo, 0.2, {
      visibility: "hidden",
      ease: Power3.easeOut,
      delay: 4.2,
    });
    TweenMax.to(overlayText, 0.8, {
      opacity: 0,
      ease: Power3.easeOut,
      delay: 3.6,
    });
    TweenMax.to(overlayText, 0.2, {
      visibility: "hidden",
      ease: Power3.easeOut,
      delay: 4.2,
    });
  });

  return (
    <div ref={(el) => (overlayContainer = el)} className={styles.overlay}>
      <div className={styles.overlaylogo} ref={(el) => (overlayLogo = el)}>
        <img src="assets/gsap/logodark.png" alt="" />
      </div>
      <div ref={(el) => (overlayText = el)} className="title text-center">
        Loading
      </div>
    </div>
  );
};

export default Overlay;
