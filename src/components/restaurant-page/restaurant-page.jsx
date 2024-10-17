import { useParams } from "react-router-dom";
import { Restaurant } from "../restaurant-item/Restautant";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <Restaurant id={restaurantId} />;
};
