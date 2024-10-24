import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { Reviews } from "./Reviews";
import { useEffect } from "react";
import { getReviews } from "../../redux/reviews/get-reviews";
import { selectRequestStatusReviews } from "../../redux/reviews";
import { getUsers } from "../../redux/users/get-users";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
    dispatch(getUsers());
  }, [dispatch]);

  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const status = useSelector(selectRequestStatusReviews);

  if (status === "idle" || status === "pending") {
    return "loading";
  }
  if (status === "rejected") {
    return "error";
  }

  if (!reviews) return;

  return <Reviews reviews={reviews} />;
};
