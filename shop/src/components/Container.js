import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import LoginWindow from "./LoginWindow";
import Cart from "./Cart";

const Container = ({ guest, setGuest }) => {
  return (
    <div className="container">
      <Route path="/home">
        <Header guest={guest} setGuest={setGuest} />
        <Switch>
          <Route path="/home/cart">
            <Cart />
          </Route>
        </Switch>
        <Switch>
          <Route path="/home/showcase">
            <Main guest={guest} />
            <Switch>
              <Route path="/home/showcase/login">
                <LoginWindow setGuest={setGuest} />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Route>
    </div>
  );
};

export default Container;
