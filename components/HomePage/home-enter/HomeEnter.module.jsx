import React from "react";
import styles from "./HomeEnter.module.css";

const HomeEnter = () => {
  const onClickHandler = () => {};
  return (
    <div className={styles.homeenter}>
      <div onClick={onClickHandler} className={styles.enterwomen}>
        Women
      </div>
      <div onClick={onClickHandler} className={styles.enterwomen}>
        Men
      </div>
    </div>
  );
};

export default HomeEnter;
