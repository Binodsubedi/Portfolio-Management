import React from 'react'
import { StockData } from '../../actions'

// export interface PropsCard{

//         stockName:string;
//         Buyer:string;
//         boughtQuantity:Number
//         totalCostPrice:Number;
//         profit:Number;
//         date:Date;
//         soldPricePerUnit: Number;
//         soldQuantity:Number
// }

// interface StockData implements Array<string|Number>{
    
// }
interface newType extends StockData{
    soldQuantity?:Number;
    soldPricePerUnit?: Number;
}

const Card = (props:{data:newType}) => {
    const {data} = props;

    // const itterateProps = ()=>{

    //         if(typeof data == 'object'){

    //             return data.map((el:any)=>{
        
    //                 return <h2 >{el}</h2>
        
    //             })
    //         }

        
    // }

  return (<div className='body__card-container'>
    <div className="body__card-container--inner card-container--inner-1">
    <label>Buyer:</label>
    <h2>{data.Buyer}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-2">
    <label>Stock Name:</label>
    <h2>{data.stockName}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-3">
        <label >No. of stocks</label>
        <h2>{`${data.boughtQuantity}`}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-4">
        <label >Total cost:</label>
        <h2>{`${data.totalCostPrice}`}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-5">
        <label >Date:</label>
        <h2>{`${data.date}`}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-6">
        <label >Sold shares:</label>
        <h2>{`${data.soldQuantity? data.soldQuantity : 0 }`}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-7">
    <label >shares sold per:</label>
        <h2>{`${data.soldPricePerUnit? data.soldPricePerUnit : 0 }`}</h2>
    </div>
    <div className="body__card-container--inner card-container--inner-8">
    <label >Sold shares:</label>
        <h2>{`${data.profit}`}</h2>
    </div>

    <div className="body__card-container--inner card-container--inner-8">
        <input type="number" placeholder='Sell Shares' />
        <button >Sell</button>
    </div>
    
  </div>
  )
}

export default Card