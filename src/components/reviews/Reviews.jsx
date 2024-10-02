import styles from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Отзывы</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};
