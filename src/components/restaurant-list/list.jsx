import Button from "../button/button";
import styles from "./list.module.scss";

export default function RestaurantList({ data, action }) {
  return (
    <div className={styles.list}>
      {data.map(({ name, id }) => (
        <Button
          key={id}
          id={id}
          action={action}
          text={name}
          className={styles.button}
        />
      ))}
    </div>
  );
}
