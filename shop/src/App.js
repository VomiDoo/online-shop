import "./App.scss";
import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import { themeContext } from "./components/context";
import RegistrationForm from "./components/RegistrationForm";
import ItemAddWindow from "./components/ItemAddWindow";
import Order from "./components/Order";


const App = () => {
  const { theme } = useContext(themeContext);
  const [guest, setGuest] = useState((JSON.parse(localStorage.getItem("actualUser")) === null) ? true : false);

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
        <Route path="/add-item">
          <ItemAddWindow />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </div>
  );
};



export default App;
