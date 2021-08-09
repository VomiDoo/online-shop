import { deleteFromCart } from "../reducers/actualUserSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ index, item }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteFromCart(index));
  };

  return (
    <li className="cart__item">
      <div
        className="cart__item--img"
        style={{
          background: `url(${item.img}) no-repeat center/cover`,
        }}
      ></div>
      <p className="cart__item--title">{item.title}</p>
      <p className="cart__item--size">Size: {item.size}</p>
      <p className="cart__item--coast"> Coast: {item.coast}$</p>
      <button className="cart__item--btn" onClick={deleteHandler}>
        🗑️
      </button>
    </li>
  );
};

export default CartItem;
