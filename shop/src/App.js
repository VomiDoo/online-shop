import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import { themeContext } from "./components/context";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const { theme } = useContext(themeContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  console.log(JSON.parse(localStorage.getItem("users")));
  return (
    <div className={`wrap ${theme}`}>
      <Switch>
        <Route path="/home">
          <Container />
        </Route>
        <Route path="/registration">
          <RegistrationForm users={users} setUsers={setUsers} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
