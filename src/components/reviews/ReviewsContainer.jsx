import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { Reviews } from "./Reviews";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  if (!reviews) return;

  return <Reviews reviews={reviews} />;
};
