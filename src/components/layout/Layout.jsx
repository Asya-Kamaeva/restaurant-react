import { ProgressBar } from "../progressBar/progressBar";
import styles from "./layout.module.scss";
import { ToggleTheme } from "../toggle-theme/toggle-theme";
import { SignIn } from "../sign-in/sign-in";
import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart";
import { Clock } from "../clock/clock";
export const Layout = () => {
  return (
    <div>
      <header>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.line}>
              <Clock />
              <ToggleTheme />
              <SignIn />
            </div>
          </div>
        </div>
      </header>
      <ProgressBar />
      <Outlet />
      <Cart />
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
