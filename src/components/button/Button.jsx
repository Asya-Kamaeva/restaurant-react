import classNames from "classnames";
import styles from "./button.module.scss";

export default function Button({ action, text, id, className }) {
  const customClass = classNames(styles.button, className);
  return (
    <button
      onClick={() => (id ? action(id) : action())}
      type="button"
      className={customClass}
    >
      {text}
    </button>
  );
}
