const HeaderUser = ({ user, setGuest }) => {
  return (
    <div className="header__user">
      <h3 className="header__user-name">{user.login}</h3>
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
