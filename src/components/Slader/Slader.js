import React, { useEffect, useState } from "react";
import slides from "./SladerArray";
import styles from "./Slader.module.scss";

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={styles.sliderWrapper}
      style={{
        backgroundImage: `url(${slides[current].src})`,
      }}
      aria-label={slides[current].alt}
    />
  );
}

export default Slider;
