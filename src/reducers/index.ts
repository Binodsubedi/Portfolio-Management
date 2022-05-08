import { combineReducers } from "redux";
import { loginUserReducer } from "./loginUser";
import { LoginStruc } from "../actions";

export interface StoreState{
    loggedinUser: LoginStruc
}


export const reducers = combineReducers<StoreState>({
    loggedinUser: loginUserReducer
});