import axios from "axios";
import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit";

export const bitcoinPrice = createAsyncThunk("price/getData", 
     async (arg, {rejectWithvalue}) => {
     try {
        const {data} = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        console.log(data)
        return data;
     } catch (error) {
rejectWithvalue(error.response.data);
     }
});

const priceSlice = createSlice({
  name: "price",
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
},
    reducer: {},
    extraReducers:{
        [bitcoinPrice.pending]: (state, {payload}) => {
            state.loading = true;
        }, 
        [bitcoinPrice.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true; 
        }, 
        [bitcoinPrice.rejected]: (state, {payload}) => {
            state.message = payload;
            state.loadiong = false;
            state.isSuccess = false; 
        }, 
    },
  },
);
export default priceSlice;