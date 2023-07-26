import React from "react";
import { connect } from "react-redux";
import { bitcoinPrice } from "./bitcoinReducer";
import "./App.css";

function App(props) {
  // destructing props
  const { data, loading, error } = props;

  // button handleClick & action to fetch data.
  const handleClick = () => {
    props.bitcoinPrice();
  };
  return (
    <div className="App">
      <h1>Bitcoin Price</h1>
      <button className="generator" onClick={handleClick}>
        Generate Bitcoin Info
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <p>Update: {data.time.update}</p>
          <p>USD: {data.bpi.USD.rate}</p>
          <p>GBP: {data.bpi.GBP.rate}</p>
          <p>EUR: {data.bpi.EUR.rate}</p>
        </div>
      )}
    </div>
  );
}
// map to state props
const mapStateToProps = (state) => {
  return {
    data: state.bitcoin.data,
    loading: state.bitcoin.loading,
    error: state.bitcoin.error,
  };
};
// mapt to dispatch props
const mapDispatchToProps = (dispatch) => {
  return {
    bitcoinPrice: () => dispatch(bitcoinPrice()),
  };
};
// use connect to store.
export default connect(mapStateToProps, mapDispatchToProps)(App);

