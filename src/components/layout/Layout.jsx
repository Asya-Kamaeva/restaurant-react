import { ProgressBar } from "../progressBar/progressBar";
import styles from "./layout.module.scss";
import { ToggleTheme } from "../toggle-theme/toggle-theme";
import { SignIn } from "../sign-in/sign-in";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.line}>
              <ToggleTheme />
              <SignIn />
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
