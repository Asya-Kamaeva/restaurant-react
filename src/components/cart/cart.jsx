import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartItem } from "./cartItem";
import styles from "./cart.module.scss";

export const Cart = () => {
  const dataCart = useSelector(selectCartItems);

  if (!dataCart.length) return null;

  return (
    <div className={styles.cart}>
      <div>Корзина:</div>
      <ul className={styles.list}>
        {dataCart.map(({ id, amount }) => (
          <li key={id}>
            <CartItem id={id} amount={amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
