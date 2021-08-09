import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import CartItem from "./CartItem";
import { changeTotalSum } from "../reducers/actualUserSlice";

const Cart = () => {
  const cartList = useSelector((state) => state.actualUser.actualUser.cart);
  const dispatch = useDispatch();
  const history = useHistory()

  let sum = 0;

  cartList.forEach((item) => {
    sum += +item.coast;
    dispatch(changeTotalSum(sum))
  });

  return (
    <div className="cart">
      <h2 className="cart__title">Your cart</h2>
      <div className="cart__total">
        <p className="cart__amount">Amount of goods: {cartList.length}</p>
        <p className="cart__sum">Amount of purchases: {sum} $</p>
        <button className="cart__btn" onClick={() => {history.push('/order')}}>Buy</button>
      </div>
      <ul className="cart__list">
        {cartList.map((item, index) => (
          <CartItem index={index} item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
