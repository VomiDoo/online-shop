import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addActualUser } from "../reducers/actualUserSlice";

const LoginWindow = ({ setGuest }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const loginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const passwordHandler = ({ target }) => {
    setPassword(target.value);
  };

  const confirmHandler = () => {
    users.forEach((user) => {
      if (
        (user.login === login || user.email === login) &&
        user.password === password
      ) {
        setGuest(false);
        dispatch(addActualUser(user));
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
        <p className="login-window__input-name">
          Login or email
          <br></br>
          <input
            type="text"
            className={`login-window__input ${login ? "" : "error"}`}
            onChange={loginHandler}
          ></input>
        </p>
        <p className="login-window__input-name">
          Password
          <br></br>
          <input
            type="password"
            className={`login-window__input ${password ? "" : "error"}`}
            onChange={passwordHandler}
          ></input>
        </p>
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
