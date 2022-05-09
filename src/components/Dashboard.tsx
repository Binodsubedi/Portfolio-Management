import React, { useEffect } from 'react'
import Header from './dashboardComp/Header'
import Body from './dashboardComp/Body'
import Footer from './welcomeComp/Footer'
import './../styles/dashboard.css'
import { connect } from 'react-redux'
import { StockData, getStocks } from '../actions'
import { StoreState } from '../reducers'


interface PropsIn{
  stocks: StockData[];
  getStocks: any
}


const Dashboard = (props:PropsIn) => {


  useEffect(()=>{
    if(props.stocks.length == 0){

      props.getStocks();
    }
    console.log(props.stocks);

  },[props.stocks.length])


  return (
    <div className='Dashboardcontainer'>
    <Header classNm='dashboardheader'/>
    <Body classNm='body'/>
    <Footer classNm='footer'/>
    </div>
  )
}


const mapStateToProps = (state:StoreState):{stocks:StockData[]}=>{
  return {
          stocks: state.stocks
  }
}


export default connect(
  mapStateToProps,
  {getStocks}
)(Dashboard);