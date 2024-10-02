import { Count } from "../count/Count";
import { useForm } from "./use-form";
import styles from "./form.module.scss";

export const FormLayout = () => {
  const {
    name,
    review,
    grade,
    setName,
    setReview,
    setIncreaseGrade,
    setDecreaseGrade,
    setDefaultValue,
    sendResult,
  } = useForm();

  return (
    <form>
      <div className={styles.form__row}>
        <label htmlFor="name">
          <span>Имя</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Петрович"
          />
        </label>
        <div>
          <span>Ваша оценка:</span>
          <Count
            value={grade}
            increase={setIncreaseGrade}
            decrease={setDecreaseGrade}
            isReview={true}
          />
        </div>
      </div>
      <label htmlFor="review" style={{ display: "block" }}>
        <span>Ваш отзыв</span>
        <textarea
          id="review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder="Очень довольный"
        ></textarea>
      </label>
      <div className={styles.form__line}>
        <button
          className={styles.form__reset}
          type="button"
          onClick={() => setDefaultValue()}
        >
          Очистить
        </button>
        <button
          className={styles.form__submit}
          type="button"
          onClick={sendResult}
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
