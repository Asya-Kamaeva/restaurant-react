import { Count } from "../count/Count";
import { useCount } from "./useCount";
import styles from "./menu.module.scss";
import { useUser } from "../userContext/use-user";

export const MenuItem = ({ item }) => {
  const { value, increase, decrease } = useCount();
  const { user } = useUser();
  return (
    <li className={styles.item}>
      <div className={styles.name}>{item.name}</div>
      {user.length > 0 && (
        <Count value={value} increase={increase} decrease={decrease} />
      )}
    </li>
  );
};
