import { FormBlock } from "../reviewForm/FormBlock";
import styles from "./Restautant.module.scss";
import { NavLink, Outlet } from "react-router-dom";

export const Restaurant = () => {
  return (
    <div className={styles.item}>
      <div className={styles.links}>
        <NavLink
          to={"menu"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Меню
        </NavLink>
        <NavLink
          to={"review"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Отзывы
        </NavLink>
      </div>
      <Outlet />
      <FormBlock />
      <div className={styles.block}></div>
    </div>
  );
};
