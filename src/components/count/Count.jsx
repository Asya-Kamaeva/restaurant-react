import styles from "./count.module.scss";
import classNames from "classnames";

export const Count = ({ value, increase, decrease, isReview = false }) => {
  return (
    <div
      className={classNames(styles.count, {
        [styles.count__review]: isReview,
      })}
    >
      <button className={styles.count__btn} type="button" onClick={decrease}>
        -
      </button>
      <div className={styles.count__value}>{value}</div>
      <button className={styles.count__btn} type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};
