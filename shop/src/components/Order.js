import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Order = () => {
  const actualUser = useSelector((state) => state.actualUser.actualUser);
  const history = useHistory();

  return (
    <div className="order">
      <h2 className="order__title">Your Order</h2>
      <p className="order__text">
        Dear {actualUser.login}, <br></br>
        thank you for ordering at our new store. We hope that the items you
        ordered will certainly suit you and will delight you for years to come.
      </p>
      <p className="order__sum">
        Total amount of your purchase: {actualUser.totalSum}$
      </p>
      <p className="order__inform">
        The order will be delivered to the address: {actualUser.address} during
        2 days
      </p>
      <button
        className="order__btn"
        onClick={() => {
          history.push("/home/cart");
        }}
      >
        Return
      </button>
    </div>
  );
};

export default Order;
