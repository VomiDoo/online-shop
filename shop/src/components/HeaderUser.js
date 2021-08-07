import { useSelector } from "react-redux";

const HeaderUser = ({ setGuest }) => {
  const actualUser = useSelector((state) => state.actualUser.actualUser);

  return (
    <div className="header__user">
      <h3 className="header__user-name">{actualUser.login}</h3>
      <button className="header__btn">🛒</button>
      <button
        className="header__btn"
        onClick={() => {
          setGuest(true);
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default HeaderUser;
