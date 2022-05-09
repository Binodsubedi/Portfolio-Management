import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { StoreState } from '../../reducers'
import { StockData, searchStock } from '../../actions'



interface propsIn{
    classNm:string;
    stocks: StockData[];
    searchStock:any;
}

const Header = (props:propsIn) => {

  const searchBox = useRef<HTMLInputElement>(null);

  const searchStart = (e:any)=>{

    e.preventDefault();

    props.searchStock(searchBox.current?.value);

    console.log(props.stocks)


  };

  return (
    <div className={props.classNm}>
      <div className='dashboardheader__searchBar'>
        
        <input type="text" placeholder='Search' ref={searchBox} />
        <button onClick={(e)=>searchStart(e)}>Search</button>
        
      </div>
      <div className='dashboardheader__optionsContainer'>
        <ul className='dashboardheader__optionsContainer--links'>
          {/* <li>Dasahboard</li> */}
          {/* <li>Create</li> */}
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/create'>Create</Link>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state:StoreState):{stocks: StockData[]}=>{

  return {
    stocks:state.stocks
  }

}

export default connect(
  mapStateToProps,{searchStock})
  (Header)