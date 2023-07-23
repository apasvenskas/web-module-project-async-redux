import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducer from "./reducer/indexReducer";
import App from "./App";
import "./index.css";
import store from "./store/store";



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// to measure performanve can use a function and reportVitals(console.log) or send endpoint to https://bit.ly/CRA-vitals
// reportWebVitals();
