import { useParams } from "react-router-dom";
import styles from "./dish.module.scss";
import { selectDishById } from "../../redux/dishes";
import { useSelector } from "react-redux";
import { useUser } from "../userContext/use-user";
import { DishCounter } from "../dish-counter/dish-counter";
import { useNavigate } from "react-router-dom";

export const Dish = () => {
  const { dishId } = useParams();
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, dishId),
  );
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.link} onClick={() => navigate(-1)}>
        {"< Назад"}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>Цена: {price} $</div>
        <div className={styles.block}>Состав: {ingredients.join(", ")}</div>
        <div className={styles.line}>
          <div>Количество:</div>
          {user.length > 0 && <DishCounter id={dishId} />}
        </div>
      </div>
    </div>
  );
};
