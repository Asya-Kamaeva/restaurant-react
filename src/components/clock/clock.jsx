import { useState } from "react";
import { useIntervalCallback } from "./useClock";
import styles from "./clock.module.scss";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useIntervalCallback((currentTime) => {
    setTime(currentTime);
  });

  const formattedTime = time.toLocaleTimeString();

  return <div className={styles.clock}>{formattedTime}</div>;
};
