import styles from "./menu.module.scss";
import { useUser } from "../userContext/use-user";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { DishCounter } from "../dish-counter/dish-counter";

export const MenuItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { user } = useUser();
  return (
    <li className={styles.item}>
      <div className={styles.name}>{dish.name}</div>
      {user.length > 0 && <DishCounter id={id} />}
    </li>
  );
};
