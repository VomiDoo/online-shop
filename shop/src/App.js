import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "./components/Container";
import { themeContext } from "./components/context";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const { theme } = useContext(themeContext);
  const [user, setUser] = useState("");
  const [guest, setGuest] = useState(true);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className={`wrap ${theme}`}>
      <Switch>
        <Route path="/home">
          <Container
            user={user}
            setUser={setUser}
            guest={guest}
            setGuest={setGuest}
          />
        </Route>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
