import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../reducers/usersSlice";

const RegistrationForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [loginPlaceholder, setLoginPlaceholder] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const saveLoginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const savePasswordHandler = ({ target }) => {
    setPassword(target.value);
  };

  const saveEmailHandler = ({ target }) => {
    setEmail(target.value);
  };

  const saveAddHandler = ({ target }) => {
    setAddress(target.value);
  };

  const saveUserHandler = () => {
    if (login && password && email && address) {
      if (users.some((user) => user.login === login)) {
        setLogin("");
        setLoginPlaceholder("This login is already registered");
      } else if (users.some((user) => user.email === email)) {
        setEmail("");
        setEmailPlaceholder("This email is already registered");
      } else {
        dispatch(
          addUser({
            login: login,
            password: password,
            email: email,
            address: address,
            uuid: uuidv4(),
            cart: [],
            totalSum: 0,
          })
        );
        history.push("/home/showcase");
      }
    }
  };

  const cancelHandler = () => {
    history.push("/home/showcase");
  };

  return (
    <div className="registration__wrap">
      <div className="registration">
        <h2 className="registration__title">Registration</h2>
        <div className="registration__form">
          <p className="registtation__input-name">
            Login <br></br>
            <input
              className={`registration__input ${login ? "" : "error"}`}
              onChange={saveLoginHandler}
              maxLength={15}
              placeholder={
                loginPlaceholder ? loginPlaceholder : "Max length: 15"
              }
              value={login}
            ></input>
          </p>
          <p className="registtation__input-name">
            Password <br></br>
            <input
              className={`registration__input ${password ? "" : "error"}`}
              onChange={savePasswordHandler}
              maxLength={15}
              placeholder="Max length: 15"
            ></input>
          </p>
          <p className="registtation__input-name">
            Email <br></br>
            <input
              className={`registration__input ${email ? "" : "error"}`}
              onChange={saveEmailHandler}
              value={email}
              placeholder={emailPlaceholder ? emailPlaceholder : ""}
            ></input>
          </p>
          <p className="registtation__input-name">
            Adress <br></br>
            <input
              className={`registration__input ${address ? "" : "error"}`}
              onChange={saveAddHandler}
            ></input>
          </p>
        </div>
        <div className="registration__btns">
          <button className="registration__btn" onClick={saveUserHandler}>
            Create account
          </button>
          <button className="registration__btn" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
