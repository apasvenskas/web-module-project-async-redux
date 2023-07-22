import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import priceSlice from './slice';

const store = createStore(
    priceSlice.reducer,
    applyMiddleware(thunk)
)

export default store; 