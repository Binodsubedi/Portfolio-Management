import React, { useEffect } from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import { StoreState } from '../../reducers';
import { StockData,getStocks } from '../../actions';


interface propsIn{
    classNm:string;
    stocks: StockData[];
    // getStocks:any;
}

const Body = (props:propsIn) => {


const cardsMaker = ():any=>{
  return props.stocks.map((el:StockData)=>{
    return <Card key={el._id}  data={el} />
  })
}


  return (
    <div className={props.classNm}>{cardsMaker()}</div>
  )
}

const mapStateToProps = (state:StoreState):{stocks:StockData[]}=>{
  return{
    stocks: state.stocks
  }
}

export default connect(mapStateToProps,{})(Body)