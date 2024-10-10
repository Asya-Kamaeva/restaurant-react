import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./cart.module.scss";

export const CartItem = ({ id, amount }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  return (
    <div className={styles.elem}>
      <div>
        {dish.name} - {amount}
      </div>
      <DishCounter id={id} isCart={true} />
    </div>
  );
};
