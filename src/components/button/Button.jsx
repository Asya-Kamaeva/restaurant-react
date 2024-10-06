import classNames from "classnames";
import styles from "./button.module.scss";
import { useTheme } from "../theme-context/use-theme";

export default function Button({ action, text, id, className, type }) {
  const { theme } = useTheme();

  return (
    <button
      onClick={() => (id ? action(id) : action())}
      type="button"
      className={classNames(styles.button, className, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.lightGrey]: type === "lightGrey",
      })}
    >
      {text}
    </button>
  );
}
