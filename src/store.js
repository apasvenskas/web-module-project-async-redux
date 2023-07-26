import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import bitcoinReducer from "./bitcoinReducer";

// root reducer
const rootReducer = combineReducers({
    bitcoin: bitcoinReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 