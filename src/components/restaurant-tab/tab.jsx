import { useSelector } from "react-redux";
import Button from "../button/button";
import { selectRestaurantById } from "../../redux/restaurants";

export default function RestaurantTab({ id, onClick, isActive }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;
  return (
    <Button
      id={id}
      action={onClick}
      text={restaurant.name}
      isActive={isActive}
    />
  );
}
