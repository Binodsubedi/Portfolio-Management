import axios from 'axios'
import {Dispatch} from 'redux'
import { ActionTypes } from './types'
export interface LoginStruc {
    status:string,
    data:string
}

export interface StockData{
    id:string;
    stockName:string;
    Buyer:string;
    boughtQuantity:Number;
    totalCostPrice:Number;
    profit:Number;
    date: Date

}

export interface StocksStruc{
    status:string;
    stocks: StockData[]
}

export interface StocksFetchAction{
    type:ActionTypes.fetchStocks;
    payload: StocksStruc
}

export interface LoginUserAction {
    type: ActionTypes.loginUser;
    payload: LoginStruc
}

export const login = (Username:string,password:string)=>{
    return async (dispatch:Dispatch)=>{

        const response = await axios.post('http://localhost:3000/api/v1/user/login', {Username,password});

        dispatch<LoginUserAction>({
            type: ActionTypes.loginUser,
            payload:response.data
        })

    }
}

export const getStocks = ()=>{
    return async (dispatch:Dispatch)=>{

        const response = await axios.get('http://localhost:3000/api/v1/stocks');

        dispatch<StocksFetchAction>({
            type: ActionTypes.fetchStocks,
            payload: response.data
        })
    }
}

export const searchStock = (stockName:string)=>{
    return async(dispatch:Dispatch)=>{

        const response = await axios.get(`http://localhost:3000/api/v1/stocks/${stockName}`);

        dispatch<StocksFetchAction>({
            type: ActionTypes.fetchStocks,
            payload: response.data
        })

    }
}