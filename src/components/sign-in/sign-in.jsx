import { useUser } from "../userContext/use-user";
import Button from "../button/button";
import styles from "./signin.module.scss";

export const SignIn = () => {
  const { user, addUser, resetUser } = useUser();
  return (
    <>
      {user !== "" ? (
        <div className={styles.user}>
          <div className={styles.userName}>{user}</div>
          <Button text={"Выйти"} action={resetUser} />
        </div>
      ) : (
        <Button text={"Войти"} action={addUser} />
      )}
    </>
  );
};
