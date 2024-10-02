import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import RestaurantList from "../restaurant-list/list";
import { Restaurant } from "../restaurant-item/Restautant";
import { useState } from "react";

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
    <div>
      <Layout>
        <div className="container">
          <h1>Список ресторанов:</h1>
          <RestaurantList data={restaurants} action={handleClick} />
          <Restaurant
            data={restaurants.find((item) => item.id === activeId)}
            key={activeId}
          />
        </div>
      </Layout>
    </div>
  );
};
