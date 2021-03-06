import axios from 'axios'
import {Dispatch} from 'redux'
import { ActionTypes } from './types'
import AxiosConfig from '../components/axiosConfig'
export interface LoginStruc {
    status:string,
    data:string
}

export interface StockData{
    _id:string;
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

        const response = await AxiosConfig.post('/api/v1/user/login', {Username,password});

        dispatch<LoginUserAction>({
            type: ActionTypes.loginUser,
            payload:response.data
        })

    }
}

export const getStocks = (Username:string)=>{
    return async (dispatch:Dispatch)=>{

        const response = await AxiosConfig.get(`/api/v1/stocks/${Username}`);

        dispatch<StocksFetchAction>({
            type: ActionTypes.fetchStocks,
            payload: response.data
        })
    }
}

export const searchStock = (stockName:string, Buyer:string)=>{
    return async(dispatch:Dispatch)=>{

        const response = await AxiosConfig.get(`/api/v1/stocks/${stockName}/${Buyer}`);

        dispatch<StocksFetchAction>({
            type: ActionTypes.fetchStocks,
            payload: response.data
        })

    }
}