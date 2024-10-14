import { ReviewItem } from "./ReviewItem";
import styles from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review} className={styles.item}>
            <ReviewItem id={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
