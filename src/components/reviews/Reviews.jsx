import styles from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Отзывы</h2>
      <ul className={styles.list}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.item}>
            {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
