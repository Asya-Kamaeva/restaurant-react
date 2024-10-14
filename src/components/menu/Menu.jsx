import { MenuItem } from "./MenuItem";
import styles from "./menu.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        {menu.map((id) => (
          <MenuItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};
