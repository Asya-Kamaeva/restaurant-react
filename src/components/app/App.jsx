import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import RestaurantList from "../restaurant-list/list";
import { Restaurant } from "../restaurant-item/Restautant";
import { useState } from "react";
import styles from "./app.module.scss";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../userContext/user-context";

export const App = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const handleClick = (id) => {
    if (activeId === id) {
      return;
    } else {
      return setActiveId(id);
    }
  };
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <div className={styles.container}>
            <h1>Список ресторанов:</h1>
            <RestaurantList data={restaurants} action={handleClick} />
            <Restaurant
              data={restaurants.find((item) => item.id === activeId)}
              key={activeId}
            />
          </div>
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
