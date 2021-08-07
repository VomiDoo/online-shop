import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import LoginWindow from "./LoginWindow";

const Container = ({ guest, setGuest }) => {
  return (
    <div className="container">
      <Header guest={guest} setGuest={setGuest} />
      <Main />
      <Switch>
        <Route path="/home/login">
          <LoginWindow setGuest={setGuest} />
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
