import { useWatch } from "./useClock";
import styles from "./clock.module.scss";

export const Clock = () => {
  const time = useWatch(new Date());

  const formattedTime = time.toLocaleTimeString();

  return <div className={styles.clock}>{formattedTime}</div>;
};
