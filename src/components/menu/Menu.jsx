import { MenuItem } from "./MenuItem";
import styles from "./menu.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <h2>Меню</h2>
      <ul>
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
