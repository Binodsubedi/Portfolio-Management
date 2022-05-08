import axios from 'axios'
import {Dispatch} from 'redux'
import { ActionTypes } from './types'
export interface LoginStruc {
    status:string,
    data:string
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