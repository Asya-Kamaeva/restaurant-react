import styles from "./count.module.scss";
import classNames from "classnames";

export const Count = ({ value, increase, decrease, isReview = false }) => {
  return (
    <div
      className={classNames(styles.count, {
        [styles.review]: isReview,
      })}
    >
      <button className={styles.button} type="button" onClick={decrease}>
        -
      </button>
      <div className={styles.value}>{value}</div>
      <button className={styles.button} type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};
