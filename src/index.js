/* global process */

import React from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Main = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

const env = {
  network: "development" // Default to Ganache CLI
};

ReactDOM.render(<Main {...env} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
