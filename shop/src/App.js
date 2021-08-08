import "./App.scss";
import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import { themeContext } from "./components/context";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const { theme } = useContext(themeContext);
  const [guest, setGuest] = useState(true);

  return (
    <div className={`wrap ${theme}`}>
      <Switch>
        <Route path="/home">
          <Container
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
