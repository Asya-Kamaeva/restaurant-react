import { useParams } from "react-router-dom";
import styles from "./dish.module.scss";
import { selectDishById } from "../../redux/dishes";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../userContext/use-user";
import { DishCounter } from "../dish-counter/dish-counter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDish } from "../../redux/dishes/get-dish";
import { selectRequestStatusDish } from "../../redux/dishes";

export const Dish = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDish(dishId));
  }, [dispatch, dishId]);

  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, dishId),
  );

  const status = useSelector(selectRequestStatusDish);
  const { user } = useUser();
  const navigate = useNavigate();

  if (status === "idle" || status === "pending") {
    return "loading";
  }
  if (status === "rejected") {
    return "error";
  }

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
