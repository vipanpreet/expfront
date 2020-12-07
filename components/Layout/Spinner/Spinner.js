import React from "react";
import Lottie from "react-lottie";
import animationData from "./spinner.json";
const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={window.innerWidth < 1024 ? 300 : 400}
        width={window.innerWidth < 1024 ? 300 : 400}
      />
    </>
  );
};

export default Spinner;
