import { useEffect, useState } from "react";
import styles from "./GotoTop.module.css";
const GoToTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", bringGoToTop);

    return () => {
      window.addEventListener("scroll", bringGoToTop);
    };
  }, []);

  const bringGoToTop = () => {
    if (window.scrollY >= 580) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleGoTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      {isOpen && (
        <div onClick={handleGoTop} className={styles.gototop}>
          <ion-icon name="chevron-up-outline"></ion-icon>
        </div>
      )}
    </>
  );
};

export default GoToTop;
