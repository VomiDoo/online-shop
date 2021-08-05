import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import LoginWindow from "./LoginWindow";

const Container = ({ users }) => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/home/login">
          <LoginWindow users={users} />
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
