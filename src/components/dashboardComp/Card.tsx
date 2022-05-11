import axios from 'axios';
import React, { useRef, useState } from 'react'
import { StockData, getStocks } from '../../actions'
import {connect} from 'react-redux';


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

const Card = (props:{data:newType,getStocks:any}) => {
    const {data} = props;

    const soldQuantity = useRef<HTMLInputElement>(null);
    const soldPricePerUnit = useRef<HTMLInputElement>(null);

    const [SoldQuantity, setSoldQuantity] = useState('');
    const [SoldPricePerUnit, setSoldPricePerUnit] = useState('');


    // const itterateProps = ()=>{

    //         if(typeof data == 'object'){

    //             return data.map((el:any)=>{
        
    //                 return <h2 >{el}</h2>
        
    //             })
    //         }

        
    // }

    const sellClick = async (e:any)=>{
        e.preventDefault();

        const reqBody = {
            date:data.date,
            stockName:data.stockName,
            Buyer: data.Buyer,
            soldQuantity: soldQuantity.current?.value,
            soldPricePerUnit: soldPricePerUnit.current?.value
        }

        const res = await axios.post('http://localhost:3000/api/v1/stocks/sellStock',reqBody);

        if(res.data.status === 'Success'){
            props.getStocks(data.Buyer);
            alert('Shares Sold Accounted');
            setSoldQuantity('');
            setSoldPricePerUnit('');
        }


    }


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
    <label >Profit:</label>
        <h2>{`${data.profit}`}</h2>
    </div>

    <div className="body__card-container--inner card-container--inner-9">
        <div className="body__card-container--inner__input">
        <input type="number" placeholder='shares' ref={soldQuantity} onChange={e=>setSoldQuantity(e.target.value)} value={SoldQuantity} />
        <input type="number" placeholder='price/unit' ref={soldPricePerUnit} onChange={e=>setSoldPricePerUnit(e.target.value)} value={SoldPricePerUnit} />
        </div>
        <button onClick={e=>sellClick(e)} >Sell</button>
    </div>
    
  </div>
  )
}


export default connect(null, {getStocks})(Card);