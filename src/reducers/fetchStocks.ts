import { ActionTypes } from "../actions/types";
import { StockData, StocksFetchAction } from "../actions";


export const fetchStocksReducer = (state:StockData[] = [] , action:StocksFetchAction )=>{

    switch (action.type){

        case ActionTypes.fetchStocks:
            return action.payload.stocks;
        default:
            return state;

    }

}

// export const fetchSearchReducer = (state:StockData[] = [], action:StocksFetchAction)=>{

//     switch (action.type){
//         case ActionTypes.
//     }

// }

