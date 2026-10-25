import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset > 320);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goUp}
      id="topButton"
      className={isVisible ? "is-visible" : ""}
      title="Back to top"
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
