import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { selectRequestStatusMenu } from "../../redux/dishes";
import { Menu } from "./Menu";
import { useEffect } from "react";
import { getMenu } from "../../redux/dishes/get-menu";

export const MenuContainer = () => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  const status = useSelector(selectRequestStatusMenu);
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  if (status === "idle" || status === "pending") {
    return "loading";
  }
  if (status === "rejected") {
    return "error";
  }

  if (!menu) return;

  return <Menu menu={menu} />;
};
