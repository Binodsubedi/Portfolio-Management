import React, { useEffect } from 'react'
import Header from './dashboardComp/Header'
import Body from './dashboardComp/Body'
import Footer from './welcomeComp/Footer'
import './../styles/dashboard.css'
import { connect } from 'react-redux'
import { StockData, getStocks, LoginStruc } from '../actions'
import { StoreState } from '../reducers'


interface PropsIn{
  stocks: StockData[];
  loggedinUser:LoginStruc;
  getStocks: any
}


const Dashboard = (props:PropsIn) => {



  useEffect(()=>{
    // if(props.stocks.length == 0){

    //       // props.getStocks(props.loggedinUser.data);
    //       // console.log(props.loggedinUser.data);
        

    //     //   console.log(props.loggedinUser.data);
    //     // props.getStocks(props.loggedinUser.data);
    //   // console.log(props.loggedinUser.data)

    // }
    // console.log(props.stocks);

    console.log(props.loggedinUser.data);

    

      if(props.loggedinUser.data==='unsent'){
  
        window.location.assign('/');
      }

      window.scrollTo({top:0});


  },[props.loggedinUser.data])


  return (
    <div className='Dashboardcontainer'>
    <Header classNm='dashboardheader'/>
    <Body classNm='body'/>
    <Footer classNm='footer'/>
    </div>
  )
}


const mapStateToProps = (state:StoreState):{stocks:StockData[],
  loggedinUser:LoginStruc
}=>{
  return {
          stocks: state.stocks,
          loggedinUser: state.loggedinUser
  }
}


export default connect(
  mapStateToProps,
  {getStocks}
)(Dashboard);