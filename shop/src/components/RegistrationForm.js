import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
    const history = useHistory();

    const cancelHandler = () => {
        history.push("/home")
    };

  return (
    <div className="registration__wrap">
      <div className="registration">
        <h2 className="registration__title">Registration</h2>
        <div className="registration__form">
          <lable className="registtation__input-name">
            Login <br></br>
            <input className="registration__input"></input>
          </lable>
          <lable className="registtation__input-name">
            Password <br></br>
            <input className="registration__input"></input>
          </lable>
          <lable className="registtation__input-name">
            Email <br></br>
            <input className="registration__input"></input>
          </lable>
          <lable className="registtation__input-name">
            Adress <br></br>
            <input className="registration__input"></input>
          </lable>
        </div>
        <div className="registration__btns">
          <button className="registration__btn">Create account</button>
          <button className="registration__btn" onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
