import { Count } from "../count/Count";
import { useCount } from "./useCount";
import styles from "./menu.module.scss";

export const MenuItem = ({ item }) => {
  const { value, increase, decrease } = useCount();
  return (
    <li className={styles.item}>
      <div className={styles.item__name}>{item.name}</div>
      <Count value={value} increase={increase} decrease={decrease} />
    </li>
  );
};
