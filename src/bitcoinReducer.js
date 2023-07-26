import axios from "axios";


// inital state difened
const initialState = {
    data: null,
    loading: false,
    error: null,
};

// action type
const FETCH_BITCOIN_PRICE = "FETCH_BITCOIN_PRICE";


// action creator
export const bitcoinPrice = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_BITCOIN_PRICE, payload: {loading: true}});
        try {
            // API request
            const response = await axios.get(
                "https://api.coindesk.com/v1/bpi/currentprice.json"
            );
            // dispatch action
            dispatch({
                type: FETCH_BITCOIN_PRICE,
                payload: {data: response.data, loading: false},
            });
        } catch (error) {
            dispatch({
                type: FETCH_BITCOIN_PRICE,
                payload: {error: error.message, loading: false},
            })
        }
    }
}

//define reducer
const bitcoinReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BITCOIN_PRICE:
            // return new state
            return {...state, ...action.payload};
            default:
                // unchaged state
                return state;
            }
}

export default bitcoinReducer; 