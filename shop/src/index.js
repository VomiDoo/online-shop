import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "./components/context";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Redirect to="/home/showcase" />
      <Theme>
        <App />
      </Theme>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
