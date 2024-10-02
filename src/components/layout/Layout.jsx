import { ProgressBar } from "../progressBar/progressBar";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className={styles.header}>
          <div className="container">
            <div className={styles.header__content}>
              Здесь возможно будет header
            </div>
          </div>
        </div>
      </header>
      <ProgressBar />
      {children}
      <footer>
        <div className={styles.footer}>
          <div className="container">
            <div className={styles.footer__content}>
              Здесь возможно будет footer
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
