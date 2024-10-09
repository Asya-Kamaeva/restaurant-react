import { useDispatch, useSelector } from "react-redux";
import { Count } from "../count/Count";
import {
  selectAmountById,
  addToCart,
  removeFromCart,
} from "../../redux/ui/cart";

export const DishCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Count value={amount} increase={increase} decrease={decrease} />;
};
