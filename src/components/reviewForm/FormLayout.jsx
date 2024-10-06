import { Count } from "../count/Count";
import { useForm } from "./use-form";
import styles from "./form.module.scss";
import Button from "../button/button";

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
      <div className={styles.row}>
        <label htmlFor="name" className={styles.label}>
          <span className={styles.span}>Имя</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Петрович"
            className={styles.input}
          />
        </label>
        <div>
          <span className={styles.span}>Ваша оценка:</span>
          <Count
            value={grade}
            increase={setIncreaseGrade}
            decrease={setDecreaseGrade}
            isReview={true}
          />
        </div>
      </div>
      <label htmlFor="review" className={styles.label}>
        <span className={styles.span}>Ваш отзыв</span>
        <textarea
          id="review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder="Очень довольный"
          className={styles.textarea}
        ></textarea>
      </label>
      <div className={styles.line}>
        <Button
          action={setDefaultValue}
          text={"Очистить"}
          className={styles.reset}
        />
        <Button
          action={sendResult}
          text={"Отправить"}
          className={styles.submit}
        />
      </div>
    </form>
  );
};
