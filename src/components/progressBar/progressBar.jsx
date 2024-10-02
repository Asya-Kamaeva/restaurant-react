import { useEffect, useState } from "react";

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
      style={{
        width: `${width}%`,
        height: "10px",
        backgroundColor: "red",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    ></div>
  );
};
