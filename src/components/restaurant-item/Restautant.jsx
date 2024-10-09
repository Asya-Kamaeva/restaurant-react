import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { FormBlock } from "../reviewForm/FormBlock";
import styles from "./Restautant.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  const { menu, reviews } = restaurant;

  return (
    <div className={styles.item}>
      {menu.length > 0 && <Menu menu={menu} />}
      {reviews.length > 0 && <Reviews reviews={reviews} />}
      <FormBlock />
      <div className={styles.block}></div>
    </div>
  );
};
