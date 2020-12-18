import { useEffect, useRef, useState } from "react";
import { Expo, TimelineMax, TweenMax } from "gsap";

const LuxuryHeader = () => {
  let leftOut = useRef(null);
  let title = useRef(null);
  let video = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    var t1 = new TimelineMax();
    t1.to(title, {
      opacity: 1,
      duration: 0.6,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
    t1.to(title, {
      animationName: "titleOut",
      duration: 0.6,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
    t1.to(leftOut, {
      top: "-100%",
      duration: 1.6,
      delay: 1,
      ease: Expo.easeInOut,
    });
    t1.from(video, {
      scale: 2,
      duration: 1.2,
      delay: -1,
      ease: Expo.easeInOut,
    });
    t1.to(container, {
      opacity: 1,
      duration: 1.2,
      delay: -0.8,
      ease: Expo.easeInOut,
    });
  }, []);
  return (
    <>
      <div className="leftout" ref={(el) => (leftOut = el)}>
        <div className="leftout--title" ref={(el) => (title = el)}>
          luxury
        </div>
        <marquee behavior="scroll" scrollamount="40" direction="right">
          Clothing Lorem ipsum dolor
        </marquee>
        <marquee behavior="scroll" scrollamount="30" direction="right">
          expectation Lorem ipsum dolor
        </marquee>
        <marquee behavior="scroll" scrollamount="35" direction="left">
          container Lorem ipsum dolor
        </marquee>
        <marquee behavior="scroll" scrollamount="45" direction="left">
          jewelery Lorem ipsum dolor
        </marquee>
      </div>
      <div class="wrapperv">
        <div class="gradient"></div>
        <video ref={(el) => (video = el)} loop autoPlay>
          <source src="/assets/luxury/luxurybg.mp4" type="video/mp4" />
          <source src="/assets/luxury/luxurybg.mp4" type="video/ogg" />
        </video>
        <div ref={(el) => (container = el)} className="vcontainer text-center">
          <h1>Feel the luxury</h1>
          <h2>collections</h2>
        </div>
      </div>
    </>
  );
};

export default LuxuryHeader;
