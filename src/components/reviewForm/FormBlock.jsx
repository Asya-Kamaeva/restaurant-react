import styles from "./form.module.scss";
import { FormLayout } from "./FormLayout";

export const FormBlock = () => {
  return (
    <div className={styles.form}>
      <h3>Оставьте ваш отзыв:</h3>
      <FormLayout />
    </div>
  );
};
