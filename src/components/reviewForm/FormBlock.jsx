import styles from "./form.module.scss";
import { FormLayout } from "./FormLayout";
import { useUser } from "../userContext/use-user";

export const FormBlock = () => {
  const { user } = useUser();
  if (!user.length) {
    return null;
  }
  return (
    <div className={styles.form}>
      <h3>Оставьте ваш отзыв:</h3>
      <FormLayout />
    </div>
  );
};
