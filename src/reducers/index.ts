import { combineReducers } from "redux";
import { loginUserReducer } from "./loginUser";
import { LoginStruc } from "../actions";
import { fetchStocksReducer } from "./fetchStocks";
import { StockData } from "../actions";

export interface StoreState{
    loggedinUser: LoginStruc,
    stocks: StockData[]
}


export const reducers = combineReducers<StoreState>({
    loggedinUser: loginUserReducer,
    stocks: fetchStocksReducer
});