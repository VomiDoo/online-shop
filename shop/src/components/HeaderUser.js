import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addActualUser } from "../reducers/actualUserSlice";

const HeaderUser = ({ setGuest }) => {
  const actualUser = useSelector((state) => state.actualUser.actualUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    setGuest(true);
    dispatch(addActualUser(null));
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
      <button className="header__btn">🛒</button>
      <button className="header__btn" onClick={logoutHandler}>
        LogOut
      </button>
    </div>
  );
};

export default HeaderUser;
