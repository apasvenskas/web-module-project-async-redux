import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bitcoinPrice} from "./store/slice";
import "./App.css";
import store from "./store/store";

function App() {
  const dispatch = useDispatch(); 
  const bitcoin = useSelector((state) => state.bitcoin);

  useEffect(() => {
    dispatch(bitcoinPrice());
  }, []);

  return (
    <div className="App">
      <h1>Bitcoin Price</h1>
      <div>
        {JSON.stringify(bitcoin)}
        <button>Generate Bitcoin Info</button>
      </div>
    </div>
  )
  }


export default App;
