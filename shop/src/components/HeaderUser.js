import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addActualUser } from "../reducers/actualUserSlice";

const HeaderUser = ({ setGuest }) => {
  const [cartOpen, setCartOpen] = useState(localStorage.getItem("cart") || "");
  const actualUser = useSelector((state) => state.actualUser.actualUser);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", cartOpen);
  }, [cartOpen]);

  const cartOpenHandler = () => {
    setCartOpen(true);
    history.push("/home/cart");
  };

  const cartCloseHandler = () => {
    setCartOpen("");
    history.push("/home/showcase");
  };

  const logoutHandler = () => {
    setGuest(true);
    dispatch(addActualUser(null));
    history.push("/home/showcase")
  };

  return (
    <div className="header__user">
      <h3 className="header__user-name">{actualUser.login}</h3>
      {actualUser.login === "admin" ? (
        <button
          className="header__btn"
          onClick={() => {
            history.push("/add-item");
          }}
        >
          Add
        </button>
      ) : null}
      {!cartOpen ? (
        <button className="header__btn" onClick={cartOpenHandler}>
          🛒
        </button>
      ) : (
        <button className="header__btn" onClick={cartCloseHandler}>
          Showcase
        </button>
      )}
      <button className="header__btn" onClick={logoutHandler}>
        LogOut
      </button>
    </div>
  );
};

export default HeaderUser;
