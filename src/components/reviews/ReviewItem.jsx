import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews";
import { selectUserById } from "../../redux/users";

export const ReviewItem = ({ id }) => {
  const { text, userId } = useSelector((state) => selectReviewById(state, id));
  const data = useSelector((state) =>
    userId ? selectUserById(state, userId) : "",
  );
  return (
    <div>
      {data && <div>{data.name}</div>}
      <div>{text}</div>
    </div>
  );
};
