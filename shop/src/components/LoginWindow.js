import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginWindow = ({ users }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const passwordHandler = ({ target }) => {
    setPassword(target.value);
  };

  const confirmHandler = () => {
    users.forEach((user) => {
      if (user.login === login && user.password === password) {
        history.push("/home");
      }
    });
  };

  const cancelHandler = () => {
    history.push("/home");
  };

  return (
    <>
      <div className="login-window__wrap"></div>
      <div className="login-window">
        <h2 className="login-window__title">Login</h2>
        <lable className="login-window__input-name">
          Login
          <br></br>
          <input
            type="text"
            className="login-window__input"
            onChange={loginHandler}
          ></input>
        </lable>
        <lable className="login-window__input-name">
          Password
          <br></br>
          <input
            type="text"
            className="login-window__input"
            onChange={passwordHandler}
          ></input>
        </lable>
        <div className="login-window__btns">
          <button className="login-window__btn" onClick={confirmHandler}>
            Confirm
          </button>
          <button className="login-window__btn" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginWindow;
