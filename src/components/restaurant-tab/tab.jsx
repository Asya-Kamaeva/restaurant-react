import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { NavLink } from "react-router-dom";
import styles from "./tab.module.scss";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export default function RestaurantTab({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;

  const { theme } = useTheme();

  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classNames(styles.tab, {
          [styles.tabActive]: isActive,
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
}
