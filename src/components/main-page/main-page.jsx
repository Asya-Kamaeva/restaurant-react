import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <div>Сайт заказа еды из разных ресторанов</div>
      <Link to={`restaurant`}>К списку ресторанов</Link>
    </div>
  );
};
