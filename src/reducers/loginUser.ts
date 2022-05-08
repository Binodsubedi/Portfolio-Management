import {LoginStruc, LoginUserAction} from './../actions/index'
import { ActionTypes } from '../actions/types'

export const loginUserReducer = (state:LoginStruc ={status:'unsent', 'data':'unsent'},action:LoginUserAction)=>{

    switch (action.type){

        case ActionTypes.loginUser:
            return action.payload;

        default:
            return state;

    }
    


}