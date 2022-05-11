import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { StoreState } from '../../reducers'
import { StockData, searchStock, LoginStruc } from '../../actions'



interface propsIn{
    classNm:string;
    stocks: StockData[];
    loggedinUser:LoginStruc
    searchStock:any;
}

const logoutUser = (e:any)=>{
  e.preventDefault();

  window.location.assign('/');
}

const Header = (props:propsIn) => {

  const searchBox = useRef<HTMLInputElement>(null);
  const wholeHeader = useRef<HTMLDivElement>(null);
  // const bars = useRef<HTMLDivElement>(null);
  const bar1 = useRef<HTMLDivElement>(null);
  const bar2 = useRef<HTMLDivElement>(null);
  const bar3 = useRef<HTMLDivElement>(null);


  const searchStart = (e:any)=>{

    e.preventDefault();

    props.searchStock(searchBox.current?.value,props.loggedinUser.data);

    console.log(props.stocks)


  };


  const showNav = ()=>{
    
    bar1.current?.classList.toggle('dashboardheader__bars-1-active');
    bar2.current?.classList.toggle('dashboardheader__bars-2-active');
    bar3.current?.classList.toggle('dashboardheader__bars-3-active');
    wholeHeader.current?.classList.toggle('dashboardheader-active')


  }


  return (
    <div className={props.classNm} ref={wholeHeader}>
      <div className="dashboardheader__bars" onClick={()=>showNav()}>
        <div className="dashboardheader__bars-1" ref={bar1}></div>
        <div className="dashboardheader__bars-2" ref={bar2}></div>
        <div className="dashboardheader__bars-3" ref={bar3}></div>
      </div>
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
          <li onClick={e=>logoutUser(e)}>Logout</li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state:StoreState):{stocks: StockData[],loggedinUser:LoginStruc}=>{

  return {
    stocks:state.stocks,
    loggedinUser: state.loggedinUser
  }

}

export default connect(
  mapStateToProps,{searchStock})
  (Header)