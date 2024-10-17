import styles from "./menu.module.scss";
import { useUser } from "../userContext/use-user";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { DishCounter } from "../dish-counter/dish-counter";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { user } = useUser();
  return (
    <li className={styles.item}>
      <NavLink to={`/dish/${id}`} className={styles.name}>
        {dish.name}
      </NavLink>
      {user.length > 0 && <DishCounter id={id} />}
    </li>
  );
};
