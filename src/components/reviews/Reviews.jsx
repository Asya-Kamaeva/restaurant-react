import { ReviewItem } from "./ReviewItem";
import styles from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Отзывы</h2>
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
