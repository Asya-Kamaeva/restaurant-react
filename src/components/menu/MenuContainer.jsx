import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { Menu } from "./Menu";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  if (!menu) return;

  return <Menu menu={menu} />;
};
