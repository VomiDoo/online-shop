import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import LoginWindow from "./LoginWindow";

const Container = ({ users, user, setUser, guest, setGuest }) => {
  return (
    <div className="container">
      <Header user={user} setUser={setUser} guest={guest} setGuest={setGuest} />
      <Main />
      <Switch>
        <Route path="/home/login">
          <LoginWindow users={users} setUser={setUser} setGuest={setGuest} />
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
