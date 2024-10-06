import Button from "../button/button";
import { ProgressBar } from "../progressBar/progressBar";
import { useTheme } from "../theme-context/use-theme";
import { useUser } from "../userContext/use-user";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  const { toggleTheme } = useTheme();
  const { user, addUser, resetUser } = useUser();
  return (
    <div>
      <header>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.line}>
              <Button text={"Toggle Theme"} action={toggleTheme} />
              {user !== "" ? (
                <div className={styles.user}>
                  <div className={styles.userName}>{user}</div>
                  <Button text={"Выйти"} action={resetUser} />
                </div>
              ) : (
                <Button text={"Войти"} action={addUser} />
              )}
            </div>
          </div>
        </div>
      </header>
      <ProgressBar />
      {children}
      <footer>
        <div className={styles.footer}>
          <div className={styles.container}>
            <div>Здесь возможно будет footer</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
