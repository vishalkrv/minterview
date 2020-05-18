import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Store } from "./store/store";
import reducer from './store/reducer';
import initState from './store/initState';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* Store for the application with initial state */}
    <Store initState={initState} reducer={reducer}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
