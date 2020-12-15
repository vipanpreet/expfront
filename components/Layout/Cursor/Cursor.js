import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const router = useRouter();
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [selectHovered, setSelectHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setLinkHovered(false);
    setSelectHovered(false);
    addEventListeners();
    handleLinkHoverEvents();
    handleSelectHoverEvents();

    return () => removeEventListeners();
  }, [router.pathname]);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a,Link,button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };
  const handleSelectHoverEvents = () => {
    document.querySelectorAll("li,input,select,ion-icon").forEach((el) => {
      el.addEventListener("mouseover", () => setSelectHovered(true));
      el.addEventListener("mouseout", () => setSelectHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--select-hovered": selectHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};
export default Cursor;
