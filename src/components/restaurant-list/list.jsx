import styles from "./list.module.scss";

export default function RestaurantList({ data, action }) {
  return (
    <div className={styles.list}>
      {data.map(({ name, id }) => (
        <button key={id} onClick={() => action(id)}>
          {name}
        </button>
      ))}
    </div>
  );
}
