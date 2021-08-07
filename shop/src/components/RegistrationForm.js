import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../reducers/usersSlice";

const RegistrationForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

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
      dispatch(
        addUser({
          login: login,
          password: password,
          email: email,
          address: address,
        })
      );
      history.push("/home");
    }
  };

  const cancelHandler = () => {
    history.push("/home");
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
            ></input>
          </p>
          <p className="registtation__input-name">
            Password <br></br>
            <input
              className={`registration__input ${password ? "" : "error"}`}
              onChange={savePasswordHandler}
            ></input>
          </p>
          <p className="registtation__input-name">
            Email <br></br>
            <input
              className={`registration__input ${email ? "" : "error"}`}
              onChange={saveEmailHandler}
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
