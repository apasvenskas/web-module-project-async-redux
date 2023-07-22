import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/indexReducer";
import App from "./App";
import "./index.css";
import store from "./store/store";

// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// to measure performanve can use a function and reportVitals(console.log) or send endpoint to https://bit.ly/CRA-vitals
// reportWebVitals();
