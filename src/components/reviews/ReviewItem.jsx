import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews";

export const ReviewItem = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  return <div>{review.text}</div>;
};
