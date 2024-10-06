import { useEffect, useState } from "react";
import styles from "./progress.module.scss";

export const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  const calc = () => {
    const newWidth =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", calc);
    return () => {
      window.removeEventListener("scroll", calc);
    };
  }, []);

  return (
    <div
      className={styles.progress}
      style={{
        width: `${width}%`,
      }}
    ></div>
  );
};
