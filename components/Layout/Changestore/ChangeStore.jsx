import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import HomeSelectionSection from "../../HomePage/home-selection-section/HomeSelectionSection.components";

const ChangeStore = ({ isOpen }) => {
  let menu = useRef(null);
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const route = useRouter();
  useEffect(() => {
    if (
      route.pathname == "/lifestyle/[gender]" ||
      route.pathname == "/luxury/[gender]"
    ) {
      setIsChangeOpen(false);
      hideUI();
      if (typeof window !== "undefined" && isChangeOpen === false) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [route]);

  const hideUI = () => {
    menu.current.style.opacity = "0";
    menu.current.style.visibility = "hidden";
    menu.current.style.top = "70%";
    setIsChangeOpen(false);
  };
  const revealUI = () => {
    menu.current.style.opacity = "1";
    menu.current.style.visibility = "visible";
    menu.current.style.top = "50%";
    setIsChangeOpen(true);
  };

  return (
    <>
      <div
        className="changestorebutton"
        onClick={isChangeOpen ? hideUI : revealUI}
      >
        <ion-icon name="options-outline"></ion-icon>
      </div>
      <div className="changestoreui" ref={menu}>
        <HomeSelectionSection isChangeOpen={isChangeOpen} />
      </div>
    </>
  );
};

export default ChangeStore;
