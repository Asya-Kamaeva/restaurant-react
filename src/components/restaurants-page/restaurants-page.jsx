import styles from "./restaurants.module.scss";
import RestaurantTab from "../restaurant-tab/tab";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={styles.container}>
      <h1>Список ресторанов:</h1>
      <div className={styles.list}>
        {restaurantsIds.map((id) => (
          <RestaurantTab key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
