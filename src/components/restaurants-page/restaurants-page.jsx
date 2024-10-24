import styles from "./restaurants.module.scss";
import RestaurantTab from "../restaurant-tab/tab";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantsIds,
  selectRestaurantsRequestStatus,
} from "../../redux/restaurants";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/get-restaurants";

export const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }
  if (requestStatus === "rejected") {
    return "error";
  }

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
