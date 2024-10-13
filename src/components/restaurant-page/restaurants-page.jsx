import styles from "./restaurants.module.scss";
import { useState } from "react";
import RestaurantTab from "../restaurant-tab/tab";
import { Restaurant } from "../restaurant-item/Restautant";
// import { restaurants } from "../../data/mock";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants";
import { Cart } from "../cart/cart";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeId, setActiveId] = useState(restaurantsIds[0]);
  const handleClick = (id) => {
    if (activeId === id) {
      return;
    } else {
      return setActiveId(id);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Список ресторанов:</h1>
      <div className={styles.list}>
        {restaurantsIds.map((id) => (
          <RestaurantTab
            key={id}
            id={id}
            onClick={() => handleClick(id)}
            isActive={id === activeId}
          />
        ))}
      </div>

      <Restaurant id={activeId} key={activeId} />
      <Cart />
    </div>
  );
};
