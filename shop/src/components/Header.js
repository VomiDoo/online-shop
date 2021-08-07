import React, { useContext } from "react";

import { themeContext } from "./context";
import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";

const Header = ({ user, guest, setGuest }) => {
  const { toggle, theme } = useContext(themeContext);

  return (
    <header className="header">
      <div className="header__title">
        <div className="header__title-logo"></div>
        <h1 className="header__title-text">Kapibarynya</h1>
      </div>
      <label>
        <input
          type="checkbox"
          onClick={toggle}
          defaultChecked={theme ? true : false}
        ></input>
        <span className="check"></span>
      </label>
      {guest ? <HeaderGuest /> : <HeaderUser user={user} setGuest={setGuest} />}
    </header>
  );
};

export default Header;
