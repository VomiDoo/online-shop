import "./App.scss";
import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import { themeContext } from "./components/context";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const { theme } = useContext(themeContext);
  const [users, setUsers] = useState([]);

  return (
    <div className={`wrap ${theme}`}>
      <Switch>
        <Route path="/home">
          <Container users={users} setUsers={setUsers} />
        </Route>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
