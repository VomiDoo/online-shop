import React, { useContext } from "react";

import { themeContext } from "./context";
import HeaderGuest from "./HeaderGuest";

const Header = () => {
  
  const { toggle } = useContext(themeContext);

  return (
    <header className="header">
      <div className="header__title">
        <div className="header__title-logo"></div>
        <h1 className="header__title-text">Kapibarynya</h1>
      </div>
      <label>
        <input type="checkbox" onClick={toggle}></input>
        <span className="check"></span>
      </label>
      <HeaderGuest />
    </header>
  );
};

export default Header;
