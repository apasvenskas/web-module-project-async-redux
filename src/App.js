import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bitcoinPrice} from "./store/slice";
import "./App.css";
import BitcoinInfo from "./components/bitcoinPrice"

function App() {
  const dispatch = useDispatch(); 
  const bitcoin = useSelector((state) => state.bitcoin);

  useEffect(() => {
    dispatch(bitcoinPrice());
  }, []);

  const bitcoinInfo = () => {
    dispatch(bitcoinPrice());
  }

  return (
    <div className="App">
      <h1>Bitcoin Price</h1>
      <div>
        <button onClick={bitcoinInfo} >Generate Bitcoin Info</button>
      </div>
    </div>
  )
  }


export default App;
