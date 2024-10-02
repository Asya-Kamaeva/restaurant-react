import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { FormBlock } from "../reviewForm/FormBlock";
import styles from "./Restautant.module.scss";

export const Restaurant = ({ data }) => {
  if (!data.name) return null;
  const { menu, reviews } = data;

  return (
    <div className={styles.item}>
      {menu.length > 0 && <Menu menu={menu} />}
      {reviews.length > 0 && <Reviews reviews={reviews} />}
      <FormBlock />
      <div style={{ height: "1200px" }}></div>
    </div>
  );
};
