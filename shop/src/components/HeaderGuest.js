import { useHistory } from "react-router-dom";

const HeaderGuest = () => {
  const history = useHistory();
  return (
    <div className="header__guest">
      <button className="header__btn">Login</button>
      <button
        className="header__btn"
        onClick={() => history.push("/registration")}
      >
        Registration
      </button>
    </div>
  );
};

export default HeaderGuest;
